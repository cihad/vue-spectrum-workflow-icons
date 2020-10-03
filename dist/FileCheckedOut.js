
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
            children.concat([_c('path',{attrs:{"d":"M20 0h.086a1 1 0 01.706.292L27.708 7.2a1 1 0 01.292.714V8h-8zm7 18a9 9 0 109 9 9 9 0 00-9-9zm5 10.814a.5.5 0 01-.854.354L29.05 27.07l-4.636 4.636a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l4.636-4.636-2.097-2.096a.5.5 0 01.354-.854h6.527a.287.287 0 01.287.287z"}}),_c('path',{attrs:{"d":"M15.75 27A11.25 11.25 0 0127 15.75c.338 0 .67.021 1 .05V10h-9a1 1 0 01-1-1V0H5a1 1 0 00-1 1v30a1 1 0 001 1h11.933a11.184 11.184 0 01-1.183-5z"}})])
          )
        }
      }
    