
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
            children.concat([_c('path',{attrs:{"d":"M2 33a1 1 0 001 1h13V20H2zM0 13v4a1 1 0 001 1h15v-6H1a1 1 0 00-1 1zm20 21h13a1 1 0 001-1V20H20zm15-22H20v6h15a1 1 0 001-1v-4a1 1 0 00-1-1zM26 2c-1.81 0-5.638 1.39-8 5.172C15.638 3.39 11.81 2 10 2a4 4 0 000 8h16a4 4 0 000-8zM10 8a2 2 0 010-4 8.734 8.734 0 016.2 4zm16 0h-6.2A8.734 8.734 0 0126 4a2 2 0 010 4z"}})])
          )
        }
      }
    