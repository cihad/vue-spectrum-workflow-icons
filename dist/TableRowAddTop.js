
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
            children.concat([_c('path',{attrs:{"d":"M27 17.9A8.9 8.9 0 1018.1 9a8.9 8.9 0 008.9 8.9zm-5-9.4a.5.5 0 01.5-.5H26V4.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V8h3.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V10h-3.5a.5.5 0 01-.5-.5z"}}),_c('path',{attrs:{"d":"M16.893 2H3a1 1 0 00-1 1v30a1 1 0 001 1h30a1 1 0 001-1V19.107a12.236 12.236 0 01-2 1.124V22h-8v-1.084a12.154 12.154 0 01-2-.685V22h-8v-8h1.769a12.252 12.252 0 011.124-12zM24 24h8v8h-8zm-10 0h8v8h-8zm-2-2H4v-8h8zm0 10H4v-8h8z"}})])
          )
        }
      }
    