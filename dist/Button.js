
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
            children.concat([_c('path',{attrs:{"d":"M26 8H10a10 10 0 000 20h16a10 10 0 000-20zm0 18.1H10a8.1 8.1 0 010-16.2h16a8.1 8.1 0 010 16.2z"}}),_c('path',{attrs:{"d":"M26 12.1H10a5.9 5.9 0 000 11.8h16a5.9 5.9 0 000-11.8z"}})])
          )
        }
      }
    