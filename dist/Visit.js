
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
            children.concat([_c('path',{attrs:{"d":"M33 4H3a1 1 0 00-1 1v24a1 1 0 001 1h2.314a8.995 8.995 0 011.949-2H4V10h28v18h-3.437a9.453 9.453 0 012.024 2H33a1 1 0 001-1V5a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M21.213 27.051v-1.674a1.159 1.159 0 01.295-.747 8.842 8.842 0 002.01-5.517c0-4.175-2.214-6.508-5.56-6.508s-5.623 2.425-5.623 6.508a8.936 8.936 0 002.107 5.517 1.159 1.159 0 01.295.747v1.667a1.15 1.15 0 01-1 1.16c-6.722.585-7.727 5.183-7.727 7 0 .2-.007.8-.007.8H30v-.8c0-1.738-1.187-6.32-7.788-6.99a1.155 1.155 0 01-.999-1.163z"}})])
          )
        }
      }
    