
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
            children.concat([_c('path',{attrs:{"d":"M24.476 7.165L18 0l-6.46 7.165a.5.5 0 00.371.835H16v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V8h4.105a.5.5 0 00.371-.835z"}}),_c('path',{attrs:{"d":"M33 10h-7v2h6v20H4V12h6v-2H3a1 1 0 00-1 1v22a1 1 0 001 1h30a1 1 0 001-1V11a1 1 0 00-1-1z"}})])
          )
        }
      }
    