
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
            children.concat([_c('path',{attrs:{"d":"M30.5 2h-27A1.5 1.5 0 002 3.5v4.963a1.5 1.5 0 001.5 1.5h27a1.5 1.5 0 001.5-1.5V3.5A1.5 1.5 0 0030.5 2zM25 8.764l-3.72-4.038a.432.432 0 01.332-.708H28.4a.432.432 0 01.332.708zM30.5 12h-27A1.5 1.5 0 002 13.5v19A1.5 1.5 0 003.5 34h27a1.5 1.5 0 001.5-1.5v-19a1.5 1.5 0 00-1.5-1.5zM6 15.75a.75.75 0 01.75-.75h20.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75zm22 13.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h20.5a.75.75 0 01.75.75zm-2-6a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h18.5a.75.75 0 01.75.75z"}})])
          )
        }
      }
    