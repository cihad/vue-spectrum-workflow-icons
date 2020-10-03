
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
            children.concat([_c('path',{attrs:{"d":"M35.338 32.3L23.864 20.824a12.012 12.012 0 10-3.04 3.04L32.3 35.338a2.155 2.155 0 003.04-3.04zM4 14a10 10 0 1117.8 6.192c-.5-1.344-1.816-2.977-4.956-3.3a.777.777 0 01-.673-.78V14.99a.78.78 0 01.2-.5 5.949 5.949 0 001.353-3.71c0-2.808-1.489-4.377-3.74-4.377S10.2 8.031 10.2 10.777a6.008 6.008 0 001.417 3.71.779.779 0 01.2.5v1.121a.774.774 0 01-.675.781c-3.2.278-4.481 1.9-4.962 3.265A9.91 9.91 0 014 14z"}})])
          )
        }
      }
    