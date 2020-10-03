
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
            children.concat([_c('path',{attrs:{"d":"M34 4H2a2 2 0 00-2 2v24a2 2 0 002 2h32a2 2 0 002-2V6a2 2 0 00-2-2zm-4 24H4V8h26zm3-7.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z"}})])
          )
        }
      }
    