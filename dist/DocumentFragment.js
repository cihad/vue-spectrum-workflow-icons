
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
            children.concat([_c('circle',{attrs:{"cx":"14.856","cy":"13.5","r":"2"}}),_c('path',{attrs:{"d":"M35 4H1a1 1 0 00-1 1v26a1 1 0 001 1h34a1 1 0 001-1V5a1 1 0 00-1-1zM4 8h16v12.694a8.535 8.535 0 00-3.478-1.125c-1.653 0-2.4 2.2-4.052 2.2s-2.936-4.353-4.588-4.353C6.379 17.412 4 21.819 4 21.819zm28 20H4v-2h28zm0-6h-8v-2h8zm0-6h-8v-2h8zm0-6h-8V8h8z"}})])
          )
        }
      }
    