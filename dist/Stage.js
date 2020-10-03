
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
            children.concat([_c('path',{attrs:{"d":"M8 27v-9a21.309 21.309 0 008-16H3a1 1 0 00-1 1v25h5a1 1 0 001-1z"}}),_c('path',{attrs:{"d":"M25.637 30V16.042l.875-.875a3.617 3.617 0 10-2.027-2.113l-8.556 8.875a.732.732 0 000 1.036L16.965 24A.732.732 0 0018 24l4.707-5.029V30H2v3a1 1 0 001 1h30a1 1 0 001-1v-3z"}})])
          )
        }
      }
    