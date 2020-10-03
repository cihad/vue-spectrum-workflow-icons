
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
            children.concat([_c('path',{attrs:{"d":"M33 2H3a1 1 0 00-1 1v14a1 1 0 001 1h2a1 1 0 001-1V6h24v24H19a1 1 0 00-1 1v2a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M18.636 27.764A.781.781 0 0019.2 28a.8.8 0 00.8-.754V16.5a.5.5 0 00-.5-.5H8.754a.8.8 0 00-.754.8.784.784 0 00.235.56l3.786 3.786-9.042 9.046a1 1 0 000 1.415l1.414 1.414a1 1 0 001.414 0l9.043-9.042z"}})])
          )
        }
      }
    