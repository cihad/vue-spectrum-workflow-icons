
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
            children.concat([_c('path',{attrs:{"d":"M26 3v27h6V3a1 1 0 00-1-1h-4a1 1 0 00-1 1zm-8 10v17h6V13a1 1 0 00-1-1h-4a1 1 0 00-1 1zm-8 8v9h6v-9a1 1 0 00-1-1h-4a1 1 0 00-1 1zm-8 4v5h6v-5a1 1 0 00-1-1H3a1 1 0 00-1 1z"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"34","y":"32"}})])
          )
        }
      }
    