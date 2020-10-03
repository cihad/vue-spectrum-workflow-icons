
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
            children.concat([_c('path',{attrs:{"d":"M14 24H4V4h28v12h2V3a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h11z"}}),_c('path',{attrs:{"d":"M35 18H17a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1v-1h4v10h-1a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1h-1V22h4v1a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 00-1-1z"}})])
          )
        }
      }
    