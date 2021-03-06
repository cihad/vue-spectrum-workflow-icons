
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
            children.concat([_c('path',{attrs:{"d":"M9 18.1a8.9 8.9 0 108.9 8.9A8.9 8.9 0 009 18.1zm5 9.4a.5.5 0 01-.5.5H10v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28H4.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H8v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}}),_c('path',{attrs:{"d":"M33 2H3a1 1 0 00-1 1v13.893a12.252 12.252 0 0112-1.124V14h8v8h-1.769a12.154 12.154 0 01.685 2H22v8h-1.769a12.236 12.236 0 01-1.124 2H33a1 1 0 001-1V3a1 1 0 00-1-1zM22 12h-8V4h8zm10 20h-8v-8h8zm0-10h-8v-8h8zm0-10h-8V4h8z"}})])
          )
        }
      }
    