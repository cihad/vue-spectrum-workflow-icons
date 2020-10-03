
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
            children.concat([_c('path',{attrs:{"d":"M26.118 17.121l1.853-10.728A2.382 2.382 0 0025.9 3.4a2.469 2.469 0 00-2.56 1.877L22 13.136s-.159 1.135-.963 1.135c-.5 0-.982-.252-.982-1.272V3.714a2.381 2.381 0 10-4.762 0V13s.056 1.005-.329 1.151a.628.628 0 01-.806-.319c-.82-2.389-2.62-7.794-2.62-7.794a2.471 2.471 0 00-2.676-1.707A2.383 2.383 0 006.986 7.45l3.244 9.434a8.021 8.021 0 01.3 1.281 1.983 1.983 0 01-.893 2.183c-.18.1-.9-.231-1.712-.675-1.484-1.083-3.005-2.291-3.005-2.291-2.381-1.621-3.849-1.06-4.464-.331-.655.776-.2 2.05.747 3.032L7.3 27.01c.357.431.893 1.063 1.551 1.776a21.816 21.816 0 002.074 3.1c1.667 1.825 4.028 2.778 7.539 2.778h.054a11.225 11.225 0 006.928-2.039 7.122 7.122 0 002.545-2.959c.818-2.371 1.5-4.968 1.756-6.113.489-2.206.268-4.147-3.629-6.432z"}})])
          )
        }
      }
    