
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
            children.concat([_c('path',{attrs:{"d":"M33.191 1.113L1.8 10.478a.5.5 0 00-.08.926l7.92 3.954zM15.645 22.372L10.08 19.25v7.639a.713.713 0 001.174.544l3.795-3.2a12.239 12.239 0 01.596-1.861zM27 14.8a12.288 12.288 0 012.786.329l5.851-12.765-22.548 14.667 4.435 2.229A12.273 12.273 0 0127 14.8zm0 3.3a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h9a.5.5 0 01.5.5z"}})])
          )
        }
      }
    