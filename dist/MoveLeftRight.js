
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
            children.concat([_c('path',{attrs:{"d":"M6.311 10.483A1 1 0 018 11.2V14h6v6H8v2.778a1.006 1.006 0 01-1.707.722L0 17zm23.396.017a1.006 1.006 0 00-1.707.722V14h-6v6h6v2.8a1 1 0 001.689.715L36 17z"}}),_c('rect',{attrs:{"height":"30","rx":"1","ry":"1","width":"4","x":"16","y":"2"}})])
          )
        }
      }
    