
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
            children.concat([_c('ellipse',{attrs:{"cx":"18","cy":"7","rx":"16","ry":"5"}}),_c('path',{attrs:{"d":"M10.777 25.179a2.422 2.422 0 01-.628-1.6C6.461 22.956 3.018 21.884 2 20.27V29c0 2.761 7.164 5 16 5 .277 0 .547-.009.821-.013zM33 13v5.727A2.36 2.36 0 0034 17v-6.73c-.973 1.23-2.926 2.11-5.229 2.73zm-20.37 8H17v-6.74c-5.094-.142-13.327-1.335-15-3.99V17c0 1.992 3.736 3.707 9.13 4.51a2.437 2.437 0 011.5-.51z"}}),_c('path',{attrs:{"d":"M35.146 24.854a.5.5 0 00-.353-.854H30v-8H20v8h-4.793a.5.5 0 00-.353.854L25 36z"}})])
          )
        }
      }
    