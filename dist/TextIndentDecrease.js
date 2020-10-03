
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"24","x":"8","y":"28"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"12","x":"20","y":"20"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"12","x":"20","y":"12"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"24","x":"8","y":"4"}}),_c('path',{attrs:{"d":"M8 14v-3.328a.5.5 0 00-.866-.341L0 18l7.134 7.669A.5.5 0 008 25.328V22h7a1 1 0 001-1v-6a1 1 0 00-1-1z"}})])
          )
        }
      }
    