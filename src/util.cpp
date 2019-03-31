#include "util.hpp"
#include <string>

void export_function(napi_env env, napi_value exports, const char *name, napi_callback fn)
{
  napi_status status = napi_ok;
  napi_value exported_fn = nullptr;

  status = napi_create_function(env, name, NAPI_AUTO_LENGTH, fn, NULL, &exported_fn);
  if (status != napi_ok)
  {
    std::string message("Unable to wrap native function: ");
    message += name;
    napi_throw_error(env, NULL, message.c_str());
  }

  status = napi_set_named_property(env, exports, name, exported_fn);
  if (status != napi_ok)
  {
    std::string message("Unable to populate exports with: ");
    message += name;
    napi_throw_error(env, NULL, message.c_str());
  }
}

napi_value convert_float_array(napi_env env, float *arr, size_t length)
{
  napi_value retval;
  napi_create_array_with_length(env, length, &retval);

  for (size_t i = 0; i < length; ++i)
  {
    napi_value elem;
    napi_create_double(env, arr[i], &elem);
    napi_set_element(env, retval, i, elem);
  }

  return retval;
}
