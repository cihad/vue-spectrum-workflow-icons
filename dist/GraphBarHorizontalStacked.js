
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
            children.concat([_c('rect',{attrs:{"height":"34","rx":".5","ry":".5","width":"2","x":"2","y":"2"}}),_c('path',{attrs:{"d":"M6 20h6v6H6zM6 4h14v6H6zm0 24h4v6H6zm0-16h10v6H6zm19 0h-7v6h7a1 1 0 001-1v-4a1 1 0 00-1-1zm8-8H22v6h11a1 1 0 001-1V5a1 1 0 00-1-1zM17 20h-3v6h3a1 1 0 001-1v-4a1 1 0 00-1-1zm-2 8h-3v6h3a1 1 0 001-1v-4a1 1 0 00-1-1z"}})])
          )
        }
      }
    