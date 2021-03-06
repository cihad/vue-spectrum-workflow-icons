
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
            children.concat([_c('path',{attrs:{"d":"M20 26h-8v-4h8v-2h-8v-4h16v2h4V3a1 1 0 00-1-1H1a1 1 0 00-1 1v26a1 1 0 001 1h19zM4 6h24v8H4zm6 20H4V16h6z"}}),_c('path',{attrs:{"d":"M35.394 29.051l-3.837-3.837 4.3-4.363A.5.5 0 0035.5 20H22v13.494a.5.5 0 00.854.358l4.33-4.265 3.837 3.837a1 1 0 001.414 0l2.96-2.959a1 1 0 00-.001-1.414z"}})])
          )
        }
      }
    