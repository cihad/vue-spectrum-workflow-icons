
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
            children.concat([_c('path',{attrs:{"d":"M9.8 17.716L23.819 3.7a1 1 0 011.414 0l7.067 7.067a1 1 0 010 1.414L18.284 26.2l4.945 4.945a.5.5 0 01-.353.854H4V13.125a.5.5 0 01.854-.353z"}})])
          )
        }
      }
    