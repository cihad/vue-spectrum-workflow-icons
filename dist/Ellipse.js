
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
            children.concat([_c('path',{attrs:{"d":"M18 5.931c8.883 0 16.11 5.414 16.11 12.069S26.883 30.069 18 30.069 1.89 24.655 1.89 18 9.117 5.931 18 5.931zm0-1.781C8.114 4.15.1 10.351.1 18S8.114 31.85 18 31.85 35.9 25.649 35.9 18 27.886 4.15 18 4.15z"}})])
          )
        }
      }
    