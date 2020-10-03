
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
            children.concat([_c('path',{attrs:{"d":"M31 30H5a1 1 0 01-1-1V5a1 1 0 011-1h26a1 1 0 011 1v24a1 1 0 01-1 1zM30 6H6v6h24zm0 8H6v6h24zm0 8H6v6h24z"}})])
          )
        }
      }
    