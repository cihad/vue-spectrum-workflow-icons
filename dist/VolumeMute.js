
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
            children.concat([_c('path',{attrs:{"d":"M12 27a10.983 10.983 0 014-8.478V5a.726.726 0 00-1.194-.571l-6.639 6.8c-.439.447-.726.845-1.422.845H1a1 1 0 00-1 1V23a1 1 0 001 1h5.745c.7 0 1 .411 1.422.845l4.005 4.1A11.013 11.013 0 0112 27z"}}),_c('path',{attrs:{"d":"M23 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM16 27a6.929 6.929 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0116 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}})])
          )
        }
      }
    