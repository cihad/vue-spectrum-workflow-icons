
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
            children.concat([_c('path',{attrs:{"d":"M15.769 32H14v-4h.75c-.026-.331-.05-.662-.05-1s.023-.669.05-1H14v-4h1.769a12.338 12.338 0 011.124-2H14v-4h7.52a12.242 12.242 0 0112.48.893V3a1 1 0 00-1-1H3a1 1 0 00-1 1v30a1 1 0 001 1h13.893a12.338 12.338 0 01-1.124-2zM4 4h28v10H4zm8 28H4v-4h8zm0-6H4v-4h8zm0-6H4v-4h8z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    