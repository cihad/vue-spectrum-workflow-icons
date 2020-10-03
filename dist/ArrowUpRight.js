
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
            children.concat([_c('path',{attrs:{"d":"M26.2 18.284L12.181 32.3a1 1 0 01-1.414 0L3.7 25.233a1 1 0 010-1.414L17.716 9.8l-4.944-4.946A.5.5 0 0113.125 4H32v18.875a.5.5 0 01-.854.353z"}})])
          )
        }
      }
    