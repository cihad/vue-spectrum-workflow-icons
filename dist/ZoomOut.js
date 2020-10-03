
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"12","x":"10","y":"14"}}),_c('path',{attrs:{"d":"M35.173 32.215L27.256 24.3a14.031 14.031 0 10-2.956 2.957l7.916 7.916a2.1 2.1 0 002.958-2.958zM6 16a10 10 0 1110 10A10 10 0 016 16z"}})])
          )
        }
      }
    