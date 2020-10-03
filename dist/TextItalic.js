
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
            children.concat([_c('path',{attrs:{"d":"M7.919 4a1.561 1.561 0 00-1.351 1l-2.109 6a.685.685 0 00.649 1h2a1.557 1.557 0 001.351-1l1.055-3h8l-7.028 20h-3a1.557 1.557 0 00-1.351 1l-.7 2a.685.685 0 00.649 1h10a1.557 1.557 0 001.351-1l.7-2a.684.684 0 00-.649-1h-3l7.028-20h8l-1.055 3a.685.685 0 00.649 1h2a1.557 1.557 0 001.351-1l2.109-6a.686.686 0 00-.649-1z"}})])
          )
        }
      }
    