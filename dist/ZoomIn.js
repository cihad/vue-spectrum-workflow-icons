
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
            children.concat([_c('path',{attrs:{"d":"M21.5 14H18v-3.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V14h-3.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H14v3.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V18h3.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5z"}}),_c('path',{attrs:{"d":"M35.173 32.215L27.256 24.3a14.031 14.031 0 10-2.956 2.957l7.916 7.916a2.1 2.1 0 002.958-2.958zM6 16a10 10 0 1110 10A10 10 0 016 16z"}})])
          )
        }
      }
    