
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
            children.concat([_c('path',{attrs:{"d":"M31.312 7.725l-1.455-1.133a1 1 0 00-1.4.175L14.822 24.283l-6.647-6.612a1 1 0 00-1.414 0L5.436 19a1 1 0 000 1.414l8.926 8.9a1 1 0 001.5-.093L31.487 9.128a1 1 0 00-.175-1.403z"}})])
          )
        }
      }
    