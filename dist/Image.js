
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
            children.concat([_c('path',{attrs:{"d":"M33 6H3a1 1 0 00-1 1v22a1 1 0 001 1h30a1 1 0 001-1V7a1 1 0 00-1-1zm-1 19.373L26.728 20.1a2 2 0 00-2.828 0l-3.072 3.072-7.556-7.557a2 2 0 00-2.828 0L4 22.059V8h28z"}}),_c('circle',{attrs:{"cx":"26.7","cy":"13.3","r":"2.7"}})])
          )
        }
      }
    