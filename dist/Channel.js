
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
            children.concat([_c('path',{attrs:{"d":"M32.375 15.125a2.864 2.864 0 00-2.475 1.437h-4.545a7.466 7.466 0 00-2.67-4.376l2.62-4.979a2.879 2.879 0 10-2.545-1.336l-2.619 4.977A7.4 7.4 0 0018 10.5a7.4 7.4 0 00-2.141.348L13.24 5.871a2.864 2.864 0 00-2.427-4.4 2.87 2.87 0 00-.113 5.736l2.62 4.979a7.466 7.466 0 00-2.67 4.376H6.1a2.875 2.875 0 100 2.876h4.544a7.466 7.466 0 002.67 4.376L10.7 28.793a2.881 2.881 0 102.545 1.336l2.619-4.977A7.4 7.4 0 0018 25.5a7.4 7.4 0 002.141-.348l2.619 4.977a2.865 2.865 0 002.427 4.4 2.87 2.87 0 00.118-5.738l-2.62-4.979a7.466 7.466 0 002.67-4.376H29.9a2.87 2.87 0 102.476-4.313zM18 22.575A4.575 4.575 0 1122.575 18 4.575 4.575 0 0118 22.575z"}})])
          )
        }
      }
    