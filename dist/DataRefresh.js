
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
            children.concat([_c('ellipse',{attrs:{"cx":"18","cy":"7","rx":"16","ry":"5"}}),_c('path',{attrs:{"d":"M14.8 30.2v-3.3a9.618 9.618 0 01.116-1.1 13.076 13.076 0 01.371-1.624C10.233 23.846 3.5 22.644 2 20.27V29c0 2.419 5.5 4.436 12.8 4.9zM27 14.8a12.115 12.115 0 016.3 1.85l.415-.424.285-.292V10.27c-2.447 3.095-11.064 4-16 4s-14.212-1.168-16-4V17c0 2.56 6.158 4.667 14.094 4.961A12.173 12.173 0 0127 14.8zm0 18.635a6.212 6.212 0 01-4.771-2.123L24.537 29H18v6.55l2.5-2.509A8.744 8.744 0 0027 36a9.3 9.3 0 009-9h-2.28A6.889 6.889 0 0127 33.435z"}}),_c('path',{attrs:{"d":"M33.558 20.958A9.215 9.215 0 0027 18a9.3 9.3 0 00-9 9h2.28A6.889 6.889 0 0127 20.565a6.283 6.283 0 014.871 2.116L29.6 25H36v-6.535z"}})])
          )
        }
      }
    