
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
            children.concat([_c('path',{attrs:{"d":"M30 14V9a1 1 0 00-1-1l-12.332.008-3.3-3.4A2 2 0 0011.929 4H4a2 2 0 00-2 2v23a1 1 0 001 1h26.307a1 1 0 00.936-.649l5.25-14A1 1 0 0034.557 14zM4 6h7.929l3.305 3.4.59.607h.845L28 10v4H8.693a1 1 0 00-.936.649L4 24.667z"}})])
          )
        }
      }
    