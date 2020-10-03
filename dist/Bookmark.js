
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
            children.concat([_c('path',{attrs:{"d":"M15.071 34.724L13 31.373l-2.071 3.351a.5.5 0 01-.929-.257V24h6v10.467a.5.5 0 01-.929.257z"}}),_c('path',{attrs:{"d":"M8 27.443A3.987 3.987 0 019.995 20h10.523a1 1 0 00.8-.4l11.1-14.8a.5.5 0 00-.4-.8H16.025a1 1 0 00-.8.4L3.522 19.328h.008A7.942 7.942 0 008 31.716zM32.018 16h-3.236l-9 12H18v4h2.518a1 1 0 00.8-.4l11.1-14.8a.5.5 0 00-.4-.8z"}})])
          )
        }
      }
    