
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
            children.concat([_c('path',{attrs:{"d":"M14.149 30.919V5.081a1 1 0 011.625-.781l16.149 12.919a1 1 0 010 1.562L15.774 31.7a1 1 0 01-1.625-.781zm-2-21.4L5.625 4.3A1 1 0 004 5.081v25.838a1 1 0 001.625.781l6.524-5.22z"}})])
          )
        }
      }
    