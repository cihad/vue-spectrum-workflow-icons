
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
            children.concat([_c('path',{attrs:{"d":"M8 9v24a1 1 0 001 1h24a1 1 0 001-1V14.914a1 1 0 00-.293-.707l-5.914-5.914A1 1 0 0027.086 8H9a1 1 0 00-1 1zm24 23H10V10h16v5a1 1 0 001 1h5zM8 0h2v6H8zM0 8h6v2H0z"}})])
          )
        }
      }
    