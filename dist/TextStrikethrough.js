
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
            children.concat([_c('path',{attrs:{"d":"M23 28h-3v-6h-4v6h-3a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1zm8-24H5a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1V8h8v8h4V8h8v3a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1z"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"28","x":"4","y":"18"}})])
          )
        }
      }
    