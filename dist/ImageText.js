
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
            children.concat([_c('path',{attrs:{"d":"M35 18H17a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1v-1h4v10h-1a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1h-1V22h4v1a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M31 2H3a1 1 0 00-1 1v22a1 1 0 001 1h11v-8a2 2 0 012-2h2.687l-5.415-5.414a2 2 0 00-2.828 0L4 17.029V4h26v12h2V3a1 1 0 00-1-1z"}}),_c('circle',{attrs:{"cx":"24.7","cy":"9.3","r":"2.7"}})])
          )
        }
      }
    