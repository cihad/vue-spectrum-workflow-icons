
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
            children.concat([_c('path',{attrs:{"d":"M11 10h22a1 1 0 001-1V3a1 1 0 00-1-1H11a1 1 0 00-1 1v3H4V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v31a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V30h6v3a1 1 0 001 1h22a1 1 0 001-1v-6a1 1 0 00-1-1H11a1 1 0 00-1 1v1H4v-8h6v1a1 1 0 001 1h22a1 1 0 001-1v-6a1 1 0 00-1-1H11a1 1 0 00-1 1v3H4V8h6v1a1 1 0 001 1zm1 18h4v2h-4zm0-12h4v2h-4zm0-12h4v2h-4z"}})])
          )
        }
      }
    