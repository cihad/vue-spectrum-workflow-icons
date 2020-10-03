
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
            children.concat([_c('path',{attrs:{"d":"M25.071 2.444L2.444 25.071a1 1 0 000 1.414l7.071 7.071a1 1 0 001.414 0l3.535-3.535-5.3-5.3a.5.5 0 010-.707l.707-.707a.5.5 0 01.707 0l5.3 5.3 5.657-5.657-3.89-3.889a.5.5 0 010-.707l.708-.708a.5.5 0 01.707 0l3.889 3.89 5.657-5.657-5.3-5.3a.5.5 0 010-.707l.707-.707a.5.5 0 01.708 0l5.3 5.3 3.535-3.535a1 1 0 000-1.414l-7.071-7.072a1 1 0 00-1.414 0z"}})])
          )
        }
      }
    