
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
            children.concat([_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.934 6.934 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}}),_c('path',{attrs:{"d":"M16.967 19.9c.52-.52 6.71-6.761 6.71-6.761l1.681 1.682a11.712 11.712 0 014.861.317l1.6-1.6-4.267-4.272 1.231-1.23 4.27 4.271 2.47-2.47a.75.75 0 000-1.061L29.06 2.313a1.5 1.5 0 00-2.122 0l-13.761 13.76A8.888 8.888 0 009 15a9 9 0 106.21 15.491c-1.241-4.201-.022-8.81 1.757-10.591zM7.5 28.5a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    