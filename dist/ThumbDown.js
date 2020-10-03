
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
            children.concat([_c('rect',{attrs:{"height":"18","rx":"1","ry":"1","width":"6","x":"2","y":"6"}}),_c('path',{attrs:{"d":"M31.077 21.89H21.11a63.859 63.859 0 01.89 9.19c0 1.661-1.032 2.92-2 2.92a1.839 1.839 0 01-2-2 11.326 11.326 0 00-2.516-6.258A46.35 46.35 0 0010 20.958V6s2.809.033 14 0a3.946 3.946 0 013.677 2.424l5.128 10.788a1.862 1.862 0 01-1.728 2.678z"}})])
          )
        }
      }
    