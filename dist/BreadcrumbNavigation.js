
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
            children.concat([_c('path',{attrs:{"d":"M35.999 18l-8.022 9.469a1.5 1.5 0 01-1.144.53h-4.226a.5.5 0 01-.382-.823L30 18l-7.774-9.177A.5.5 0 0122.607 8h4.226a1.5 1.5 0 011.144.53zm-10 0l-8.021 9.469a1.5 1.5 0 01-1.145.53H1.001a1 1 0 01-1-1L0 9a1 1 0 011-1h15.833a1.5 1.5 0 011.145.53zM7.501 18A2.5 2.5 0 105 20.5 2.5 2.5 0 007.5 18zm6.5 0a2.5 2.5 0 10-2.5 2.5A2.5 2.5 0 0014 18zm6.5 0a2.5 2.5 0 10-2.5 2.5 2.5 2.5 0 002.5-2.5z"}})])
          )
        }
      }
    