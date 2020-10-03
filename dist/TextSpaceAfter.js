
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"20","x":"14","y":"8"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"20","x":"14","y":"14"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"20","x":"14","y":"2"}}),_c('path',{attrs:{"d":"M4 33.328a.5.5 0 00.866.341L10 28l-5.134-5.669a.5.5 0 00-.866.341zM34 33V23a1 1 0 00-1-1H15a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1zm-2-1H16v-8h16z"}})])
          )
        }
      }
    