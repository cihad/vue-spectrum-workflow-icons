
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
            children.concat([_c('path',{attrs:{"d":"M32 5a1.068 1.068 0 00-1.125-1H1.125A1.068 1.068 0 000 5v22a1.068 1.068 0 001.125 1H2V6h30z"}}),_c('path',{attrs:{"d":"M35 8H5a1 1 0 00-1 1v22a1 1 0 001 1h30a1 1 0 001-1V9a1 1 0 00-1-1zm-1 19.373L28.728 22.1a2 2 0 00-2.828 0l-3.072 3.072-7.556-7.557a2 2 0 00-2.828 0L6 24.059V10h28z"}}),_c('circle',{attrs:{"cx":"29","cy":"15","r":"2.5"}})])
          )
        }
      }
    