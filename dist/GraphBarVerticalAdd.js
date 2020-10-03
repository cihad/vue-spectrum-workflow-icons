
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
            children.concat([_c('path',{attrs:{"d":"M23 12h-4a1 1 0 00-1 1v5.635a12.269 12.269 0 016-3.551V13a1 1 0 00-1-1zm-4.9 15a8.9 8.9 0 108.9-8.9 8.9 8.9 0 00-8.9 8.9zm3.9-.5a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5zm10-10.731V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v11.75c.331-.027.662-.05 1-.05a12.241 12.241 0 015 1.069zM.5 34h16.393a12.321 12.321 0 01-1.124-2H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5zM16 21a1 1 0 00-1-1h-4a1 1 0 00-1 1v9h5.084A12.1 12.1 0 0116 21.52zM3 24a1 1 0 00-1 1v5h6v-5a1 1 0 00-1-1z"}})])
          )
        }
      }
    