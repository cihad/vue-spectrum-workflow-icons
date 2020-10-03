
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
            children.concat([_c('path',{attrs:{"d":"M18.332 28c-.216 0-.288-.076-.288-.264v-8.95a13.766 13.766 0 01-3.709 1.325c-.216.037-.288 0-.288-.227v-3.2c0-.188.036-.263.216-.3a16.954 16.954 0 004.937-2.233.913.913 0 01.54-.151h2.06c.143 0 .18.076.18.264v13.472c0 .188-.073.264-.216.264z"}}),_c('path',{attrs:{"d":"M35 6h-5V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H12V3a1 1 0 00-1-1H9a1 1 0 00-1 1v3H3a1 1 0 00-1 1v26a1 1 0 001 1h32a1 1 0 001-1V7a1 1 0 00-1-1zm-1 26H4V8h4v1a1 1 0 001 1h2a1 1 0 001-1V8h14v1a1 1 0 001 1h2a1 1 0 001-1V8h4z"}})])
          )
        }
      }
    