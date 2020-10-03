
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
            children.concat([_c('path',{attrs:{"d":"M14.7 27a12.217 12.217 0 0114.008-12.168l4.8-4.8a1.373 1.373 0 00.4-.883 1.22 1.22 0 00-.35-.948L27.8 2.432a1.215 1.215 0 00-.867-.353H26.9a1.37 1.37 0 00-.927.406L5.084 23.372a1 1 0 00-.251.421L2.055 33.1c-.114.376.459.851.783.851a.272.272 0 00.061-.006c.276-.063 7.867-2.344 9.312-2.778a.984.984 0 00.414-.249l2.207-2.207A12.4 12.4 0 0114.7 27zM4.668 31.338l2.009-6.73 4.72 4.708c-2.161.649-4.862 1.465-6.729 2.022z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.934 6.934 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}})])
          )
        }
      }
    