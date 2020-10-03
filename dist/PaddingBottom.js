
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
            children.concat([_c('path',{attrs:{"d":"M32 4v28H4V4zm1-2H3a1 1 0 00-1 1v30a1 1 0 001 1h30a1 1 0 001-1V3a1 1 0 00-1-1z"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"24","x":"6","y":"22"}})])
          )
        }
      }
    