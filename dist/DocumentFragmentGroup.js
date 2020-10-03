
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
            children.concat([_c('path',{attrs:{"d":"M35 8H5a1 1 0 00-1 1v22a1 1 0 001 1h30a1 1 0 001-1V9a1 1 0 00-1-1zM8 12h14v8.875a8.532 8.532 0 00-3.478-1.125c-1.653 0-2.4 2.2-4.052 2.2s-1.7-3.765-3.351-3.765C9.617 18.181 8 22 8 22zm24 16H8v-2h24zm0-8h-6v-2h6zm0-6h-6v-2h6z"}}),_c('path',{attrs:{"d":"M2 7a1 1 0 011-1h29V5a1 1 0 00-1-1H1a1 1 0 00-1 1v22a1 1 0 001 1h1z"}}),_c('circle',{attrs:{"cx":"18","cy":"16","r":"2"}})])
          )
        }
      }
    