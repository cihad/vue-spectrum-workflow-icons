
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
            children.concat([_c('path',{attrs:{"d":"M28 18a5.962 5.962 0 00-4.608 2.2l-9.552-4.867a6.067 6.067 0 10-1.346 2.6l9.622 4.9A6 6 0 1028 18zm0 9a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    