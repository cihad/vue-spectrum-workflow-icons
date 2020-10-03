
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
            children.concat([_c('path',{attrs:{"d":"M20.735 2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V11.265a2 2 0 00-.586-1.414l-7.265-7.265A2 2 0 0020.735 2zM28 32H8V4h12.121v6.879a1 1 0 001 1H28zm-6-22V5.266L26.734 10z"}})])
          )
        }
      }
    