
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
            children.concat([_c('path',{attrs:{"d":"M30 3a1 1 0 00-1-1H7a1 1 0 00-1 1v13.1a15.608 15.608 0 005.857 12.187l5.674 4.355a.7.7 0 00.937 0l5.674-4.355A15.608 15.608 0 0030 16.1zM9.722 22.287A14.482 14.482 0 018 16V4h20z"}})])
          )
        }
      }
    