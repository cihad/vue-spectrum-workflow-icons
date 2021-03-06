
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
            children.concat([_c('path',{attrs:{"d":"M34.978.377A34.727 34.727 0 009.586 21.99a.522.522 0 00.125.545l3.752 3.751a.522.522 0 00.541.127A34.428 34.428 0 0035.619 1.018a.544.544 0 00-.641-.641zM7.8 19.148H.9a.524.524 0 01-.46-.783C2.021 15.609 7.92 6.52 16.848 6.52 14.776 8.591 7.962 17.569 7.8 19.148zm9.048 9.052v6.908a.524.524 0 00.779.461c2.752-1.554 11.849-7.376 11.849-16.419-2.076 2.07-11.05 8.884-12.628 9.05z"}})])
          )
        }
      }
    