
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
            children.concat([_c('circle',{attrs:{"cx":"18","cy":"11","r":"3.5"}}),_c('path',{attrs:{"d":"M31 2H5a1 1 0 00-1 1v30a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1zm-1 30h-6v-4a2 2 0 002-2v-6a4 4 0 00-4-4h-8a4 4 0 00-4 4v6a2 2 0 002 2v4H6V4h24z"}})])
          )
        }
      }
    