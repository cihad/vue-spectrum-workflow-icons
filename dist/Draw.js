
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
            children.concat([_c('path',{attrs:{"d":"M20.454 8L5.084 23.372a.992.992 0 00-.251.421L2.055 33.1c-.114.376.459.85.783.85a.311.311 0 00.062-.006c.276-.064 7.867-2.344 9.311-2.778a.984.984 0 00.415-.25L28 15.544zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73zM33.567 8.2L27.8 2.432a1.215 1.215 0 00-.866-.353H26.9a1.372 1.372 0 00-.927.407l-4.1 4.1 7.543 7.543 4.1-4.1a1.372 1.372 0 00.4-.883 1.224 1.224 0 00-.349-.946z"}})])
          )
        }
      }
    