
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
            children.concat([_c('path',{attrs:{"d":"M6 12h4v4H6zm6 0h4v4h-4zm6 0h4v4h-4zM6 18h4v4H6zm6 0h4v4h-4zm-6 6h4v4H6zm8.7 3a12.274 12.274 0 01.384-3H12v4h2.75c-.026-.33-.05-.662-.05-1zM27 14.7c.338 0 .669.024 1 .05V12h-4v3.084a12.284 12.284 0 013-.384z"}}),_c('path',{attrs:{"d":"M15.769 32H2V8h4v1a1 1 0 001 1h2a1 1 0 001-1V8h14v1a1 1 0 001 1h2a1 1 0 001-1V8h4v7.769a12.26 12.26 0 012 1.124V7a1 1 0 00-1-1h-5V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H10V3a1 1 0 00-1-1H7a1 1 0 00-1 1v3H1a1 1 0 00-1 1v26a1 1 0 001 1h15.893a12.283 12.283 0 01-1.124-2z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    