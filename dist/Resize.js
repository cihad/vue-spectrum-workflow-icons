
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
            children.concat([_c('path',{attrs:{"d":"M31 4H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V5a1 1 0 00-1-1zM18 20.828l4.414-4.414 2.732 2.732a.5.5 0 00.854-.353V10h-8.793a.5.5 0 00-.354.854l2.732 2.732L15.172 18H8V8h20v20H18z"}})])
          )
        }
      }
    