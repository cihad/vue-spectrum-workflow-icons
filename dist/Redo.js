
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
            children.concat([_c('path',{attrs:{"d":"M5.337 12.542A10.391 10.391 0 0112.329 10H25V4.8a.8.8 0 01.8-.8.787.787 0 01.527.2l7.524 7.445a.5.5 0 010 .7L26.332 19.8a.787.787 0 01-.527.2.8.8 0 01-.8-.8V14H12.123A6.139 6.139 0 005.9 19.8 5.889 5.889 0 0012 26h7a1 1 0 011 1v2a1 1 0 01-1 1h-6.526a10.335 10.335 0 01-10.426-9.013 9.947 9.947 0 013.289-8.445z"}})])
          )
        }
      }
    