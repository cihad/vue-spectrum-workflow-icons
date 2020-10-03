
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
            children.concat([_c('path',{attrs:{"d":"M35.293 19.292l-17-17A1 1 0 0017.586 2H3a1 1 0 00-1 1v14.585a1 1 0 00.293.708l17 17a1 1 0 001.414 0l14.586-14.586a1 1 0 000-1.415zM8 10.6A2.6 2.6 0 1110.6 8 2.6 2.6 0 018 10.6z"}})])
          )
        }
      }
    