
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
            children.concat([_c('path',{attrs:{"d":"M35.9 19a8.9 8.9 0 10-8.9 8.9 8.9 8.9 0 008.9-8.9zm-3.9.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h9a.5.5 0 01.5.5z"}}),_c('path',{attrs:{"d":"M2 3v32a1 1 0 001 1h30a1 1 0 001-1v-5.893a12.139 12.139 0 01-2 1.123V34h-8v-3.084a12.139 12.139 0 01-2-.684V34h-8v-8h3.308a12.229 12.229 0 01-1.808-4H6v-6h9.5a12.229 12.229 0 011.809-4H14V4h8v3.769a12.154 12.154 0 012-.685V4h8v3.769a12.108 12.108 0 012 1.123V3a1 1 0 00-1-1H3a1 1 0 00-1 1zm10 23v8H4v-8zm0-22v8H4V4z"}})])
          )
        }
      }
    