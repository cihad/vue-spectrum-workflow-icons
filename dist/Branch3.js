
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
            children.concat([_c('path',{attrs:{"d":"M14 28a5.962 5.962 0 00-2.2-4.608l4.868-9.552a5.622 5.622 0 002.665 0l4.867 9.552a5.908 5.908 0 102.641-1.275l-4.9-9.622a6.015 6.015 0 00.846-.908l.006-.008a5.987 5.987 0 00.6-.989c.018-.037.041-.07.058-.106a5.965 5.965 0 00.343-.994c.019-.073.05-.141.067-.214a6 6 0 10-11.715 0c.016.074.048.141.067.214a5.965 5.965 0 00.343.994c.017.037.04.07.058.106a5.987 5.987 0 00.6.989l.006.008a6.015 6.015 0 00.846.908l-4.9 9.622A6 6 0 1014 28zm17 0a3 3 0 11-3-3 3 3 0 013 3zM5 28a3 3 0 113 3 3 3 0 01-3-3z"}})])
          )
        }
      }
    