
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
            children.concat([_c('path',{attrs:{"d":"M2 20h2v6H2zm0-10h2v6H2zm2 22v-2H2v3.111a.889.889 0 00.889.889H6v-2zm6 0h6v2h-6zm22-22h2v6h-2zm1.111-8H30v2h2v2h2V2.889A.889.889 0 0033.111 2zM20 2h6v2h-6zM10 2h6v2h-6zM6 2H3a1 1 0 00-1 1v3h2V4h2zm28.887 22.684l-4.034-3.537A.489.489 0 0030.5 21a.5.5 0 00-.5.5V24h-4v-4h2.5a.5.5 0 00.5-.5.49.49 0 00-.148-.35l-3.536-4.033a.5.5 0 00-.633 0l-3.536 4.033a.489.489 0 00-.147.35.5.5 0 00.5.5H24v4h-4v-2.5a.5.5 0 00-.5-.5.489.489 0 00-.35.147l-4.034 3.537a.5.5 0 000 .632l4.034 3.536a.49.49 0 00.35.148.5.5 0 00.5-.5V26h4v4h-2.5a.5.5 0 00-.5.5.487.487 0 00.147.35l3.536 4.034a.5.5 0 00.633 0l3.536-4.034A.488.488 0 0029 30.5a.5.5 0 00-.5-.5H26v-4h4v2.5a.5.5 0 00.5.5.49.49 0 00.35-.148l4.034-3.536a.5.5 0 000-.632z"}})])
          )
        }
      }
    