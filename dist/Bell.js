
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
            children.concat([_c('path',{attrs:{"d":"M18 36a4.406 4.406 0 004-4h-8a4.406 4.406 0 004 4zm9.143-24.615c0-3.437-3.206-4.891-7.143-5.268V3a1.079 1.079 0 00-1.143-1h-1.714A1.079 1.079 0 0016 3v3.117c-3.937.377-7.143 1.831-7.143 5.268C8.857 26.8 4 26.111 4 28.154V30h28v-1.846C32 26 27.143 26.8 27.143 11.385z"}})])
          )
        }
      }
    