
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
            children.concat([_c('path',{attrs:{"d":"M18.5 10.054a.494.494 0 00-.5.5v24.782a.494.494 0 00.846.354L26.51 28h9c.445 0 .479-.726.225-.98L18.846 10.2a.489.489 0 00-.346-.146z"}}),_c('path',{attrs:{"d":"M13.991 30H5.997V6H30v8l4 4V2H2v32h11.991v-4z"}})])
          )
        }
      }
    