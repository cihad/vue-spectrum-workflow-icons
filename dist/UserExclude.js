
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
            children.concat([_c('path',{attrs:{"d":"M14.7 27a12.266 12.266 0 014.311-9.342v-1.409a1.441 1.441 0 01.367-.93 11 11 0 002.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.121 11.121 0 002.622 6.866 1.443 1.443 0 01.367.93v2.074A1.431 1.431 0 019.7 19.767C1.338 20.5.031 26.217.031 28.474c0 .251.048 1.484.048 1.484h14.994A12.288 12.288 0 0114.7 27zM27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20.2 27a6.749 6.749 0 011.289-3.957l9.468 9.468A6.78 6.78 0 0120.2 27zm12.311 3.957l-9.468-9.468a6.78 6.78 0 019.468 9.468z"}})])
          )
        }
      }
    