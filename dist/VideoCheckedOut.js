
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
            children.concat([_c('path',{attrs:{"d":"M27 18a9 9 0 109 9 9 9 0 00-9-9zm5 10.814a.5.5 0 01-.854.354L29.05 27.07l-4.636 4.636a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l4.636-4.636-2.097-2.096a.5.5 0 01.354-.854h6.527a.287.287 0 01.287.287z"}}),_c('path',{attrs:{"d":"M15.5 27a11.47 11.47 0 014.353-9H12.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h11c.023 0 .037.022.06.025A11.45 11.45 0 0126 15.55v-2.344a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v2.703a11.389 11.389 0 012 .747V5a1 1 0 00-1-1H5a1 1 0 00-1 1v26a1 1 0 001 1h11.656a11.432 11.432 0 01-1.156-5zM26 6.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5zm-16 23a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6.706a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6.588a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zM10 9.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"}})])
          )
        }
      }
    