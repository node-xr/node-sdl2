{
  'variables': {
    'platform': '<(OS)',
  },
  'conditions': [
    # Replace gyp platform with node platform, blech
    ['platform == "mac"', {'variables': {'platform': 'darwin'}}],
    ['platform == "win"', {'variables': {'platform': 'win32'}}],
  ],
  'targets': [
    {
      'target_name': 'sdl2',
      'defines': [
        'NAPI_VERSION=3',
        'NAPI_DISABLE_CPP_EXCEPTIONS',
      ],
      'sources': [
        'src/bindings.cpp',
        'src/sdl/events.cpp',
        'src/sdl/quit.cpp',
        'src/sdl/sdl.cpp',
        'src/sdl/syswm.cpp',
        'src/sdl/video.cpp',
        'src/util.cpp',
      ],
      'include_dirs': [
        '<(module_root_dir)/deps/sdl2/include',
      ],
      'conditions': [
        ['OS=="linux"', {
          'library_dirs': ['<(module_root_dir)/deps/sdl2/lib/linux64'],
          'libraries': [
            '-Wl,-rpath,<(module_root_dir)/build/Release',
            '<(module_root_dir)/deps/sdl2/lib/linux64/libSDL2-2.0.so.0'
          ],
          'copies':
          [
            {
              'destination': '<(module_root_dir)/build/Release',
              'files': ['<(module_root_dir)/deps/sdl2/lib/linux64/libSDL2-2.0.so.0']
            }
          ],
        }],
        ['OS=="mac"', {
          'library_dirs': ['<(module_root_dir)/deps/sdl2/lib/osx64'],
          'libraries': [
            '-Wl,-rpath,<(module_root_dir)/build/Release',
            '<(module_root_dir)/deps/sdl2/lib/osx64/SDL2.dylib'
          ],
          'copies':
          [
            {
              'destination': '<(module_root_dir)/build/Release',
              'files': ['<(module_root_dir)/deps/sdl2/lib/osx64/SDL2.dylib']
            }
          ],
        }],
        ['OS=="win"', {
          'library_dirs': ['<(module_root_dir)/deps/sdl2/lib/win64'],
          'libraries': ['SDL2.lib'],
          'defines' : ['WIN32_LEAN_AND_MEAN', 'VC_EXTRALEAN', 'NOMINMAX'],
          'msvs_settings' : {
            'VCCLCompilerTool' : {
              'AdditionalOptions' : ['/O2','/Oy','/GL','/GF','/Gm-','/EHsc','/MT','/GS','/Gy','/GR-','/Gd']
            },
            'VCLinkerTool' : {
              'AdditionalOptions' : ['/OPT:REF','/OPT:ICF','/LTCG']
            },
          },
          'copies':
          [
            {
              'destination': '<(module_root_dir)/build/Release',
              'files': ['<(module_root_dir)/deps/sdl2/lib/win64/SDL2.dll']
            }
          ],
        }],
      ],
    }
  ]
}