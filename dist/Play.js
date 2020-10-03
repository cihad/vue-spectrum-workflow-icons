
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
            children.concat([_c('path',{attrs:{"d":"M9.46 4H7a1 1 0 00-1 1v26a1 1 0 001 1h2.46a2 2 0 001.007-.272l22.064-12.866a1 1 0 000-1.724L10.467 4.272A2 2 0 009.46 4z"}})])
          )
        }
      }
    