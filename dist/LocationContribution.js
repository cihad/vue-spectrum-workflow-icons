
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
            children.concat([_c('path',{attrs:{"d":"M2 5v26a1 1 0 001 1h30a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1zm4 3h18v14H6zm0 20v-4h18v4zm24 0h-4V8h4z"}}),_c('path',{attrs:{"d":"M18.838 10.346l-4.988 7.127-2.84-2.573a.5.5 0 00-.706.035l-.939 1.038a.5.5 0 00.035.706l3.84 3.476a1.21 1.21 0 001.8-.2l5.76-8.233a.5.5 0 00-.123-.7l-1.147-.8a.5.5 0 00-.692.124z"}})])
          )
        }
      }
    