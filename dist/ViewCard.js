
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
            children.concat([_c('path',{attrs:{"d":"M2 33a1 1 0 001 1h7V18H2zM3 2a1 1 0 00-1 1v11h8V2zm23 32h7a1 1 0 001-1v-5h-8zm7-32h-7v6h8V3a1 1 0 00-1-1zM14 22h8v12h-8zm0-20h8v16h-8zm12 10h8v12h-8z"}})])
          )
        }
      }
    