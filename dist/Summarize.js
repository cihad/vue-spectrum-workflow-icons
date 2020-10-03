
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"24","x":"6","y":"2"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"24","x":"6","y":"18"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"32","x":"2","y":"10"}}),_c('path',{attrs:{"d":"M19.5 34a.5.5 0 00.5-.5V30h2.793a.5.5 0 00.354-.854L18 24l-5.146 5.146a.5.5 0 00.354.854H16v3.5a.5.5 0 00.5.5z"}})])
          )
        }
      }
    