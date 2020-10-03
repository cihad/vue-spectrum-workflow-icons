
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
            children.concat([_c('path',{attrs:{"d":"M18.1 27a8.9 8.9 0 108.9-8.9 8.9 8.9 0 00-8.9 8.9zm3.9-.5a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5z"}}),_c('path',{attrs:{"d":"M14.7 27a12.238 12.238 0 011.069-5H14v-8h8v1.769a12.154 12.154 0 012-.685V14h8v1.769a12.236 12.236 0 012 1.124V3a1 1 0 00-1-1H3a1 1 0 00-1 1v30a1 1 0 001 1h13.893a12.229 12.229 0 01-2.193-7zM24 4h8v8h-8zM14 4h8v8h-8zm-2 18H4v-8h8zm0-10H4V4h8z"}})])
          )
        }
      }
    