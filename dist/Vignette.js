
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
            children.concat([_c('path',{attrs:{"d":"M31 4H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V5a1 1 0 00-1-1zm-1 26H6V6h24z"}}),_c('path',{attrs:{"d":"M28 15.632V8h-7.632A10.283 10.283 0 0128 15.632zM15.632 8H8v7.632A10.283 10.283 0 0115.632 8zM8 20.368V28h7.632A10.283 10.283 0 018 20.368zM20.368 28H28v-7.632A10.283 10.283 0 0120.368 28z"}})])
          )
        }
      }
    