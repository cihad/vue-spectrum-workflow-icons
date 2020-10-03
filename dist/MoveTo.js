
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
            children.concat([_c('path',{attrs:{"d":"M21.879 20.344a1 1 0 01-1.414 0l-4.809-4.809a1 1 0 010-1.414L23.777 6H3a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V12.223z"}}),_c('path',{attrs:{"d":"M23.707 2a.5.5 0 00-.353.854l3.482 3.482-8.136 8.139a.5.5 0 000 .707l2.118 2.118a.5.5 0 00.707 0l8.139-8.139 3.482 3.483a.5.5 0 00.854-.351V2z"}})])
          )
        }
      }
    