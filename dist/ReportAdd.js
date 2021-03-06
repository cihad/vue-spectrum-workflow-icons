
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
            children.concat([_c('path',{attrs:{"d":"M15.084 30H10.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4.25a12.252 12.252 0 01.334-2H10.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h6.393a12.349 12.349 0 011.743-2H16.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6.393a12.269 12.269 0 012-1.124V6.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v8.25c.331-.027.662-.05 1-.05s.669.024 1 .05V5a1 1 0 00-1-1H9a1 1 0 00-1 1v26a1 1 0 001 1h6.769a12.2 12.2 0 01-.685-2zM10 14.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5z"}}),_c('path',{attrs:{"d":"M27.1 18.2a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5h-3.5v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3.5h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3.5v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v3.5h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    