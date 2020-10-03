
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm-5 15a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1zm0-8a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1zm0-8a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1h4a1 1 0 011 1z"}})])
          )
        }
      }
    