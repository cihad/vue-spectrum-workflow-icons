
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
            children.concat([_c('path',{attrs:{"d":"M18 1.925a12 12 0 00-12 12c0 6.627 12 21.75 12 21.75s12-15.123 12-21.75a12 12 0 00-12-12zm0 16.725A4.65 4.65 0 1122.65 14 4.65 4.65 0 0118 18.65z"}})])
          )
        }
      }
    