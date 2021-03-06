
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
            children.concat([_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"34","y":"32"}}),_c('path',{attrs:{"d":"M10 24h6v6h-6zm16-8h6v14h-6zM2 26h6v4H2zm16-6h6v10h-6zm6-9v7h-6v-7a1 1 0 011-1h4a1 1 0 011 1zm8-8v11h-6V3a1 1 0 011-1h4a1 1 0 011 1zM16 19v3h-6v-3a1 1 0 011-1h4a1 1 0 011 1zm-8 2v3H2v-3a1 1 0 011-1h4a1 1 0 011 1z"}})])
          )
        }
      }
    