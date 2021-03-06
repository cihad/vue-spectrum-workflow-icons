
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
            children.concat([_c('path',{attrs:{"d":"M30.371 16.321L34 23.578v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-15l10 12 3.584-5.378a.5.5 0 01.832 0L20 29.578l9.517-13.324a.5.5 0 01.854.067z"}}),_c('path',{attrs:{"d":"M11.769 25.239l2.151-3.227a2.5 2.5 0 014.16 0L20.074 25l7.906-11.067a2.5 2.5 0 014.271.335L34 17.765V7.578l-3.57-5.355a.5.5 0 00-.84.012L20 17.578 16.416 12.2a.5.5 0 00-.832 0L12 17.578l-10-10v5.938z"}})])
          )
        }
      }
    