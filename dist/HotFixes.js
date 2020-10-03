
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M14.14 1.787a.5.5 0 00-.852.471 15.054 15.054 0 01.653 6.566 16.977 16.977 0 01-2.91 6.165 26.831 26.831 0 00-2.849 5.5 10.411 10.411 0 1020.223 3.5v-.037c-.076-4.845-3.036-11.542-6.022-16a.5.5 0 00-.907.327c.521 8.357-4 11.315-4 11.315S21.124 9.256 14.14 1.787z"}})])
          )
        }
      }
    