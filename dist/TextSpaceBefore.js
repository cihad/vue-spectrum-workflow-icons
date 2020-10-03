
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"12","y":"24"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"12","y":"18"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"12","y":"30"}}),_c('path',{attrs:{"d":"M2 2.672a.5.5 0 01.866-.341L8 8l-5.134 5.669A.5.5 0 012 13.328zM33 2H13a1 1 0 00-1 1v10a1 1 0 001 1h20a1 1 0 001-1V3a1 1 0 00-1-1zm-1 10H14V4h18z"}})])
          )
        }
      }
    