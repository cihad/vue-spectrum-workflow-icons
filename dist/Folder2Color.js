
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
            children.concat([_c('path',{attrs:{"d":"M33 8l-14.331.008-3.3-3.4A2 2 0 0013.929 4H4a2 2 0 00-2 2v23a1 1 0 001 1h30a1 1 0 001-1V9a1 1 0 00-1-1zm-1 20H4V10h28z"}}),_c('path',{attrs:{"opacity":".3","d":"M4 10h28v18H4z"}})])
          )
        }
      }
    