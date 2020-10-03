
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
            children.concat([_c('path',{attrs:{"d":"M20 0h.086a1 1 0 01.706.292L27.708 7.2a1 1 0 01.292.714V8h-8z"}}),_c('path',{attrs:{"d":"M14 27a13 13 0 0113-13c.338 0 .669.025 1 .05V10h-9a1 1 0 01-1-1V0H5a1 1 0 00-1 1v30a1 1 0 001 1h10a12.956 12.956 0 01-1-5zm21.605 2.549a8.883 8.883 0 01-15.501 3.09l-1.25 1.251a.489.489 0 01-.35.148.5.5 0 01-.504-.501v-5a.5.5 0 01.5-.5h4.999a.502.502 0 01.501.504.489.489 0 01-.147.35l-1.74 1.74a6.057 6.057 0 0010.597-1.436.977.977 0 01.921-.62h1.25a.759.759 0 01.724.974z"}}),_c('path',{attrs:{"d":"M18.395 24.526a8.883 8.883 0 0115.501-3.091l1.25-1.25a.489.489 0 01.35-.148.5.5 0 01.504.5v5a.5.5 0 01-.5.5h-4.999a.502.502 0 01-.501-.504.489.489 0 01.147-.35l1.74-1.74A6.057 6.057 0 0021.29 24.88a.977.977 0 01-.921.62h-1.25a.759.759 0 01-.724-.974z"}})])
          )
        }
      }
    