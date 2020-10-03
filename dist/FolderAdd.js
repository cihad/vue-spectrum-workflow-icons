
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
            children.concat([_c('path',{attrs:{"d":"M27 16a10.95 10.95 0 017 2.522V9a1 1 0 00-1-1l-14.332.008-3.3-3.4A2 2 0 0013.929 4H4a2 2 0 00-2 2v23a1 1 0 001 1h13.427A10.969 10.969 0 0127 16zM4 6h9.929l3.887 4H4z"}}),_c('path',{attrs:{"d":"M27 18a9 9 0 109 9 9 9 0 00-9-9zm5.4 10a.5.5 0 01-.5.5h-3.4v3.4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-3.4h-3.4a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h3.4v-3.4a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3.4h3.4a.5.5 0 01.5.5z"}})])
          )
        }
      }
    