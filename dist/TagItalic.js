
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
            children.concat([_c('path',{attrs:{"d":"M17.682 31.663c-.041.213-.08.3-.282.3h-4.08c-.2 0-.279-.043-.24-.341l4.481-27.367c.041-.213.16-.255.281-.255h4.121c.24 0 .279.127.279.34z"}})])
          )
        }
      }
    