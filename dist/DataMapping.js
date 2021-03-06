
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M32 18.5a3.496 3.496 0 00-2.95 1.617l-5.087-1.454A6.072 6.072 0 0024 18a5.994 5.994 0 00-2.75-5.043l2.349-5.48A3.54 3.54 0 0024 7.5a3.5 3.5 0 10-2.24-.812l-2.35 5.48a5.993 5.993 0 00-4.885.943L7.079 5.665A3.498 3.498 0 105.665 7.08l7.446 7.446a5.995 5.995 0 00-.273 6.533L6.914 26.07a3.498 3.498 0 101.293 1.527l5.924-5.013a5.998 5.998 0 005.868 1.074l2.998 5.397a3.5 3.5 0 101.749-.973l-2.999-5.398a6.02 6.02 0 001.668-2.097l5.086 1.454A3.5 3.5 0 1032 18.5zM24 2a2 2 0 11-2 2 2 2 0 012-2zM4 6a2 2 0 112-2 2 2 0 01-2 2zm1 25a2 2 0 112-2 2 2 0 01-2 2zm20.5-1.5a2 2 0 11-2 2 2 2 0 012-2zM32 24a2 2 0 112-2 2 2 0 01-2 2z"}})])
          )
        }
      }
    