
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
            children.concat([_c('path',{attrs:{"d":"M2 20h2v6H2zm0-10h2v6H2zm30 0h2v6h-2zM4 32v-2H2v3.111a.889.889 0 00.889.889H6v-2zM33.111 2H30v2h2v2h2V2.888A.888.888 0 0033.111 2zM20 2h6v2h-6zM10 2h6v2h-6zm0 30h6v2h-6zM6 2H3a1 1 0 00-1 1v3h2V4h2zm21 16a9 9 0 109 9 9 9 0 00-9-9zm5.957 6.26l-6.476 7.929a.5.5 0 01-.738.041l-4.759-4.667a.5.5 0 01-.008-.708l1.61-1.641a.5.5 0 01.706-.007l2.573 2.519 4.535-5.553a.5.5 0 01.7-.07l1.78 1.453a.5.5 0 01.077.704z"}})])
          )
        }
      }
    