
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18.1 2.2A15.9 15.9 0 1034 18.1 15.9 15.9 0 0018.1 2.2zm0 29.812A13.912 13.912 0 1132.012 18.1 13.912 13.912 0 0118.1 32.012zm8.981-19.377L16.21 26.611a1 1 0 01-1.496.092l-6.157-6.131a1 1 0 010-1.415l1.325-1.325a1 1 0 011.414 0l3.878 3.844 8.875-11.402a1 1 0 011.403-.175l1.455 1.133a1 1 0 01.175 1.403z"}})])
          )
        }
      }
    