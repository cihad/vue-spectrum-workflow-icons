
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
            children.concat([_c('path',{attrs:{"d":"M3 4a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1V8h6v20H9a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1h-3V8h6v3a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1zm28.742 8c-.121 0-.16-.039-.16-.141V3.805a8.128 8.128 0 01-2.1.72c-.119.02-.158 0-.158-.121v-1.7c0-.1.02-.141.119-.16a9.969 9.969 0 002.78-1.2.505.505 0 01.3-.08H33.9c.08 0 .1.039.1.138v10.457c0 .1-.039.141-.119.141z"}})])
          )
        }
      }
    