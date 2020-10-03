
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
            children.concat([_c('path',{attrs:{"d":"M27.1 18.1A8.9 8.9 0 1036 27a8.9 8.9 0 00-8.9-8.9zm0 16a7.1 7.1 0 01-1-14.121V27a1 1 0 00.293.707l3.022 3.023a.5.5 0 00.708 0l.707-.708a.5.5 0 000-.707l-2.73-2.729v-6.608a7.1 7.1 0 01-1 14.122z"}}),_c('path',{attrs:{"d":"M15.8 27a11.289 11.289 0 0118.565-8.642l1.128-3.007A1 1 0 0034.557 14H30V9a1 1 0 00-1-1l-12.332.008-3.3-3.4A2 2 0 0011.929 4H4a2 2 0 00-2 2v23a1 1 0 001 1h13.216a11.254 11.254 0 01-.416-3zM7.757 14.649L4 24.667V6h7.929l3.305 3.4.59.607h.845L28 10v4H8.693a1 1 0 00-.936.649z"}})])
          )
        }
      }
    