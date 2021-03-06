
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
            children.concat([_c('path',{attrs:{"d":"M33.093 6.061l-8.14 11.374L20.9 9.321a.5.5 0 00-.917.053l-5.45 14.992-4.081-4.081a.5.5 0 00-.674-.031L2.18 26.579a.5.5 0 00-.18.384v4.188a.5.5 0 00.829.376l7.048-6.157 5.708 5.708a.5.5 0 00.823-.183l4.548-12.51L24 24.481a.5.5 0 00.857.063l9.053-12.928a.5.5 0 00.09-.286V6.352a.5.5 0 00-.907-.291z"}})])
          )
        }
      }
    