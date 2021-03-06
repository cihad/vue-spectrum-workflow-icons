
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
            children.concat([_c('path',{attrs:{"d":"M33 18h-2a1 1 0 00-1 1v11H6V6h11a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v30a1 1 0 001 1h30a1 1 0 001-1V19a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M33.5 2H22.754a.8.8 0 00-.754.8.784.784 0 00.235.56l3.786 3.79-7.042 7.042a1 1 0 000 1.415l1.414 1.414a1 1 0 001.414 0l7.043-7.042 3.786 3.785A.781.781 0 0033.2 14a.8.8 0 00.8-.754V2.5a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    