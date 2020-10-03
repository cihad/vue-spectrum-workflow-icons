
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
            children.concat([_c('path',{attrs:{"d":"M27.688 14.026Q27.348 14 27 14a9.001 9.001 0 00-7.484 14H3.718A3.92 3.92 0 010 23.854c0-1.73 1.792-4.261 4.092-4.261a4.815 4.815 0 01-.134-1.577 6.254 6.254 0 016.399-6.075 7.743 7.743 0 012.098.291c.936-3.166 3.622-6.17 7.607-6.17a7.296 7.296 0 017.641 7.57c0 .133-.005.264-.015.394z"}}),_c('path',{attrs:{"d":"M26.969 15.813a7.25 7.25 0 107.25 7.25 7.255 7.255 0 00-7.25-7.25zm3.87 9.915a.92.92 0 01-.65 1.57.925.925 0 01-.65-.27L27.111 24.6l-2.426 2.427a.919.919 0 01-1.57-.65.914.914 0 01.27-.65l2.426-2.427-2.393-2.418a.818.818 0 01-.307-.589 1.007 1.007 0 01.957-.982.925.925 0 01.65.27L27.111 22l2.393-2.419a.925.925 0 01.65-.27 1.007 1.007 0 01.957.982.818.818 0 01-.306.589L28.412 23.3z"}})])
          )
        }
      }
    