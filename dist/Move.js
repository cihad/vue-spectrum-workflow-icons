
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
            children.concat([_c('path',{attrs:{"d":"M34 18a.5.5 0 00-.113-.316L32 16.029V16h-.033l-2.113-1.853A.49.49 0 0029.5 14a.5.5 0 00-.5.5V16h-9V7h1.5a.5.5 0 00.5-.5.489.489 0 00-.147-.35L20 4.033V4h-.029l-1.655-1.887a.5.5 0 00-.632 0L16.029 4H16v.033l-1.853 2.113A.489.489 0 0014 6.5a.5.5 0 00.5.5H16v9H7v-1.5a.5.5 0 00-.5-.5.49.49 0 00-.35.147L4.033 16H4v.029l-1.887 1.655a.5.5 0 000 .632L4 19.971V20h.033l2.113 1.852A.491.491 0 006.5 22a.5.5 0 00.5-.5V20h9v9h-1.5a.5.5 0 00-.5.5.487.487 0 00.147.35L16 31.967V32h.029l1.655 1.887a.5.5 0 00.632 0L19.971 32H20v-.033l1.853-2.114A.487.487 0 0022 29.5a.5.5 0 00-.5-.5H20v-9h9v1.5a.5.5 0 00.5.5.491.491 0 00.35-.148L31.967 20H32v-.029l1.887-1.655A.5.5 0 0034 18z"}})])
          )
        }
      }
    