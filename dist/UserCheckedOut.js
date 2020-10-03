
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
            children.concat([_c('path',{attrs:{"d":"M15.5 27a11.474 11.474 0 014.776-9.316 15.017 15.017 0 003.307-8.642C23.583 3.616 20.495 0 16.05 0S8.519 3.616 8.519 9.042A15.034 15.034 0 0012.05 18c0 1.652-.026 2.976-1.674 3.12-2.252.2-9.617 2.644-10.278 9.826a1 1 0 00.944 1.053L1.1 32h15.557a11.432 11.432 0 01-1.156-5z"}}),_c('path',{attrs:{"d":"M27 18a9 9 0 109 9 9 9 0 00-9-9zm5 10.814a.5.5 0 01-.854.354L29.05 27.07l-4.636 4.636a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l4.636-4.636-2.097-2.096a.5.5 0 01.354-.854h6.527a.287.287 0 01.287.287z"}})])
          )
        }
      }
    