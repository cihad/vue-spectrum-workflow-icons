
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
            children.concat([_c('path',{attrs:{"d":"M8 18.5a10.4 10.4 0 002.182 6.341L25.919 11.07A10.5 10.5 0 008 18.5z"}}),_c('path',{attrs:{"d":"M35 2H1a1 1 0 00-1 1v30a1 1 0 001 1h34a1 1 0 001-1V3a1 1 0 00-1-1zm-6 16.5a10.466 10.466 0 01-18.818 6.341L2 32V4h32l-8.081 7.07A10.472 10.472 0 0129 18.5z"}})])
          )
        }
      }
    