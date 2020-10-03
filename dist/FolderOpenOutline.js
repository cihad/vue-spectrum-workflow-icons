
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
            children.concat([_c('path',{attrs:{"d":"M8.69 14h24.535l-4.666 14H4zm5.239-10H4a2 2 0 00-2 2v23a1 1 0 001 1h26.279a1 1 0 00.949-.684l5.333-16A1 1 0 0034.613 12H32V9a1 1 0 00-1-1l-12.332.007-3.3-3.4A2 2 0 0013.929 4z"}})])
          )
        }
      }
    