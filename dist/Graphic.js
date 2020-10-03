
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
            children.concat([_c('path',{attrs:{"d":"M33 14h-9V1.385a.482.482 0 00-.481-.5H23.5a.494.494 0 00-.35.147L1.091 23.146a.5.5 0 00.354.854h8.838A7.909 7.909 0 0010 26a7.976 7.976 0 0014.89 4H33a1 1 0 001-1V15a1 1 0 00-1-1zM4.828 22L22 4.828V14h-3a1 1 0 00-1 1v3a7.967 7.967 0 00-6.891 4zM18 32a6 6 0 116-6 6.007 6.007 0 01-6 6z"}})])
          )
        }
      }
    