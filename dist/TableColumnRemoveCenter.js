
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
            children.concat([_c('path',{attrs:{"d":"M8.1 27a8.9 8.9 0 108.9-8.9A8.9 8.9 0 008.1 27zm3.9-.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5z"}}),_c('path',{attrs:{"d":"M33 2H1a1 1 0 00-1 1v30a1 1 0 001 1h5.893a12.139 12.139 0 01-1.123-2H2v-8h3.084a12.139 12.139 0 01.684-2H2v-8h8v3.308a12.229 12.229 0 014-1.808V6h6v9.5a12.229 12.229 0 014 1.809V14h8v8h-3.768a12.139 12.139 0 01.684 2H32v8h-3.769a12.139 12.139 0 01-1.123 2H33a1 1 0 001-1V3a1 1 0 00-1-1zM10 12H2V4h8zm22 0h-8V4h8z"}})])
          )
        }
      }
    