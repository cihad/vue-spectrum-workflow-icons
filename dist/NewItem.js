
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
            children.concat([_c('path',{attrs:{"d":"M31 4H5a1 1 0 00-1 1v13h13a1 1 0 011 1v13h13a1 1 0 001-1V5a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M16 32h-.086a1 1 0 01-.707-.293L4.293 20.793A1 1 0 014 20.086V20h12z"}})])
          )
        }
      }
    