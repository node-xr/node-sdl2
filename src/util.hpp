#pragma once
#include <node_api.h>

#define ASSERT_OK(_x, _err, _msg)        \
  {                                      \
    napi_status status = (_x);           \
    if (status != napi_ok)               \
    {                                    \
      napi_throw_error(env, _err, _msg); \
      return nullptr;                    \
    }                                    \
  }

#define GET_ARGS(_x)                                            \
  {                                                             \
    size_t argc = (_x);                                         \
    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr); \
    if (argc < (_x))                                            \
    {                                                           \
      napi_throw_error(env, "EINVAL", "Too few arguments");     \
      return nullptr;                                           \
    }                                                           \
  }

#define SET_PROPERTY(_obj, _type, _name, _value)                                                     \
  {                                                                                                  \
    napi_value tmp;                                                                                  \
    ASSERT_OK(napi_create_##_type(env, _value, &tmp), "EINVAL", "Argument type error.");             \
    ASSERT_OK(napi_set_named_property(env, _obj, #_name, tmp), "EINVAL", "Property setting error."); \
  }

#define SET_PROPERTY_EXTERNAL(_obj, _name, _value)                                                          \
  {                                                                                                         \
    napi_value tmp;                                                                                         \
    ASSERT_OK(napi_create_external(env, _value, nullptr, nullptr, &tmp), "EINVAL", "Argument type error."); \
    ASSERT_OK(napi_set_named_property(env, _obj, #_name, tmp), "EINVAL", "Property setting error.");        \
  }

#define SET_PROPERTY_TEXT(_obj, _name, _value, _maxlen)                                                                \
  {                                                                                                                    \
    napi_value tmp;                                                                                                    \
    ASSERT_OK(napi_create_string_utf8(env, _value, strnlen(_value, _maxlen), &tmp), "EINVAL", "Argument type error."); \
    ASSERT_OK(napi_set_named_property(env, _obj, #_name, tmp), "EINVAL", "Property setting error.");                   \
  }

void export_function(napi_env env, napi_value exports, const char *name, napi_callback fn);

napi_value convert_float_array(napi_env env, float *arr, size_t length);