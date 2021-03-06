
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
            children.concat([_c('path',{attrs:{"d":"M24 32v-7a1 1 0 011-1h7a1.161 1.161 0 01-.254.854l-6.892 6.892A1.161 1.161 0 0124 32z"}}),_c('path',{attrs:{"d":"M31 4H5a1 1 0 00-1 1v26a1 1 0 001 1h17v-8a2 2 0 012-2h8V5a1 1 0 00-1-1zM18 24h-8v-2h8zm8-6H10v-2h16zm0-6H10v-2h16z"}})])
          )
        }
      }
    