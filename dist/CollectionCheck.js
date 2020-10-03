
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
            children.concat([_c('path',{attrs:{"d":"M15.084 28H14V18h2.893a12.368 12.368 0 011.743-2H14V6h8v7.769a12.2 12.2 0 012-.685V6h8v7.769a12.274 12.274 0 012 1.124V5a1 1 0 00-1-1H3a1 1 0 00-1 1v24a1 1 0 001 1h12.769a12.2 12.2 0 01-.685-2zM12 28H4V18h8zm0-12H4V6h8z"}}),_c('path',{attrs:{"d":"M27 16.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.127a.5.5 0 010-.707l1.036-1.036a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.702-.005z"}})])
          )
        }
      }
    