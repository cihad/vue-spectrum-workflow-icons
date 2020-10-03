
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
            children.concat([_c('path',{attrs:{"d":"M29.2 2H6.8A4.8 4.8 0 002 6.8v22.4A4.8 4.8 0 006.8 34h22.4a4.8 4.8 0 004.8-4.8V6.8A4.8 4.8 0 0029.2 2zm-.355 10.377L14.566 26.655a.8.8 0 01-1.131 0l-6.28-6.278a.8.8 0 010-1.131l2.491-2.491a.8.8 0 011.131 0L14 19.98 25.223 8.755a.8.8 0 011.131 0l2.491 2.491a.8.8 0 010 1.131z"}})])
          )
        }
      }
    