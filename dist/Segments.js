
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
            children.concat([_c('path',{attrs:{"d":"M11.118 14h23.764A1.119 1.119 0 0036 12.882V5.118A1.118 1.118 0 0034.882 4H11.118A1.118 1.118 0 0010 5.118V8H6a2 2 0 00-2 2v3.1a5 5 0 000 9.8V26a2 2 0 002 2h4v2.882A1.119 1.119 0 0011.118 32h23.764A1.119 1.119 0 0036 30.882v-7.764A1.118 1.118 0 0034.882 22H11.118A1.118 1.118 0 0010 23.118V26H6v-3.1a5 5 0 000-9.8V10h4v2.882A1.119 1.119 0 0011.118 14zM8 18a3 3 0 11-3-3 3 3 0 013 3z"}})])
          )
        }
      }
    