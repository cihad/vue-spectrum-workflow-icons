
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
            children.concat([_c('ellipse',{attrs:{"cx":"18","cy":"7","rx":"16","ry":"5"}}),_c('path',{attrs:{"d":"M17 31l-4.209-.011a2.5 2.5 0 01-1.852-4.179l2.517-2.786C8.729 23.548 3.321 22.366 2 20.27V29c0 2.656 6.632 4.822 15 4.984zm15.3-11.765C33.377 18.562 34 17.8 34 17v-6.73c-1.216 1.538-3.958 2.536-7.014 3.151zm-9.844-5.172a50.39 50.39 0 01-4.456.212c-4.936 0-14.212-1.168-16-4V17c0 2.479 5.778 4.531 13.352 4.926z"}}),_c('path',{attrs:{"d":"M35.146 27.146a.5.5 0 01-.353.854H30v8H20v-8h-4.793a.5.5 0 01-.353-.854L25 16z"}})])
          )
        }
      }
    