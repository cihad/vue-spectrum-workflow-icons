
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
            children.concat([_c('path',{attrs:{"d":"M26 14c0-.4-.021-.8-.06-1.188A9.995 9.995 0 0012.812 25.94c.391.039.787.06 1.188.06a12 12 0 0012-12z"}}),_c('path',{attrs:{"d":"M10 22a12 12 0 0115.482-11.482 12 12 0 10-14.964 14.964A11.989 11.989 0 0110 22zm15.482-11.482a11.907 11.907 0 01.458 2.294A10 10 0 1112.812 25.94a11.907 11.907 0 01-2.294-.458 12 12 0 1014.964-14.964z"}})])
          )
        }
      }
    