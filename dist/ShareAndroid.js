
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
            children.concat([_c('path',{attrs:{"d":"M27.464 24.227a4.459 4.459 0 00-3.157 1.3l-11.336-6.333a4.374 4.374 0 000-2.373l11.336-6.368a4.512 4.512 0 10-1.143-1.945l-11.319 6.359a4.473 4.473 0 100 6.282l11.319 6.327a4.472 4.472 0 104.3-3.249z"}})])
          )
        }
      }
    