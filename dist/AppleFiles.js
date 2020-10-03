
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
            children.concat([_c('path',{attrs:{"d":"M31.66 8H17.709a2.347 2.347 0 01-1.3-.393L11.59 4.393A2.343 2.343 0 0010.292 4H4.34A2.34 2.34 0 002 6.34v21.32A2.34 2.34 0 004.34 30h27.32A2.34 2.34 0 0034 27.66V10.34A2.34 2.34 0 0031.66 8zM4 11.5A1.5 1.5 0 015.5 10h25a1.5 1.5 0 011.5 1.5v.5H4z"}})])
          )
        }
      }
    