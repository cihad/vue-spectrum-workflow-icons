
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zM9.02 21.391A3.391 3.391 0 1112.411 18a3.391 3.391 0 01-3.391 3.391zm8.981 0A3.391 3.391 0 1121.391 18 3.392 3.392 0 0118 21.391zm8.822 0A3.391 3.391 0 1130.214 18a3.391 3.391 0 01-3.391 3.391z"}})])
          )
        }
      }
    