
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"36","width":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4.936 20.484l-1.1 3.322a.235.235 0 01-.259.194H.988c-.172 0-.216-.086-.172-.237 1.143-3.236 2.976-8.543 4.335-12.275a3.813 3.813 0 00.216-1.337.136.136 0 01.151-.151h3.473a.162.162 0 01.173.108c1.575 4.336 3.3 9.276 4.9 13.676.064.151.021.216-.13.216h-2.85a.193.193 0 01-.216-.151L9.66 20.484zm4.055-2.459C8.56 16.558 7.7 14.1 7.265 12.545h-.021c-.324 1.467-1.1 3.732-1.661 5.48z"}}),_c('path',{attrs:{"d":"M14.045 10.257c0-.15.022-.193.129-.214.943-.022 2.743-.043 4.565-.043 4.436 0 5.379 1.95 5.379 3.686a3.1 3.1 0 01-2.036 3v.043a3.309 3.309 0 012.572 3.236c0 2.658-2.294 4.029-6.194 4.029-1.65.022-3.386-.021-4.265-.043a.17.17 0 01-.15-.193zm2.979 5.379h1.865c1.714 0 2.25-.707 2.25-1.628 0-1.158-.772-1.629-2.422-1.629-.836 0-1.5.021-1.693.043zm0 5.937c.236 0 .729.042 1.608.042 1.8 0 2.871-.471 2.871-1.8 0-1.114-.686-1.757-2.593-1.757h-1.886zM32.752 10a7.959 7.959 0 012.946.439c.1.063.126.1.126.251v2.21c0 .189-.1.189-.188.147a7.061 7.061 0 00-2.779-.523 4.175 4.175 0 00-4.535 4.43c0 3.427 2.466 4.388 4.514 4.388a8.49 8.49 0 002.925-.5c.1-.042.167 0 .167.125v2.152c0 .147-.021.23-.167.293a8.621 8.621 0 01-3.448.588c-3.74 0-7.041-2.069-7.041-6.958 0-3.991 2.928-7.042 7.48-7.042z"}})])
          )
        }
      }
    