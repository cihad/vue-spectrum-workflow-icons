
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
            children.concat([_c('circle',{attrs:{"cx":"18","cy":"14","r":"4"}}),_c('path',{attrs:{"d":"M33 6H3a1 1 0 00-1 1v22a1 1 0 001 1h30a1 1 0 001-1V7a1 1 0 00-1-1zm-1 22h-6v-4a4 4 0 00-4-4h-8a4 4 0 00-4 4v4H4V8h28z"}})])
          )
        }
      }
    