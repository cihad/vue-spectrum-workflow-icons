
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
            children.concat([_c('path',{attrs:{"d":"M29.571 28.715a6.429 6.429 0 100-12.857 6.497 6.497 0 00-.725.04 8.144 8.144 0 10-15.922-3.235 6.862 6.862 0 00-8.407 8.394 3.857 3.857 0 10-.66 7.658z"}})])
          )
        }
      }
    