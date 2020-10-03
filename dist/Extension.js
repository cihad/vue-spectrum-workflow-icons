
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
            children.concat([_c('path',{attrs:{"d":"M32 8h-2V1.215a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V8h-6V1.215a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V8h-2a2 2 0 00-2 2v2a2 2 0 002 2h.035v5.5a4.5 4.5 0 004.5 4.5H22.5v3A5.312 5.312 0 0112 27V11.536a5.445 5.445 0 00-4.6-5.5 5.2 5.2 0 00-5.491 3.276.767.767 0 00.395.995l1.289.554a.783.783 0 001.048-.4A2.251 2.251 0 019 11.25V27a8.287 8.287 0 0016.5 0v-3h1.938a4.5 4.5 0 004.5-4.5V14H32a2 2 0 002-2v-2a2 2 0 00-2-2z"}})])
          )
        }
      }
    