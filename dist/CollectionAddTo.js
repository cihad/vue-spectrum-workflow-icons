
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
            children.concat([_c('path',{attrs:{"d":"M20 28h-6V18h6v-2h-6V6h8v8h2V6h8v8h2V5a1 1 0 00-1-1H3a1 1 0 00-1 1v24a1 1 0 001 1h17zm-8 0H4V18h8zm0-12H4V6h8z"}}),_c('path',{attrs:{"d":"M35.394 25.051l-3.837-3.837 4.3-4.363A.5.5 0 0035.5 16H22v13.494a.5.5 0 00.854.358l4.33-4.265 3.837 3.837a1 1 0 001.414 0l2.96-2.959a1 1 0 00-.001-1.414z"}})])
          )
        }
      }
    