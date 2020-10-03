
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
            children.concat([_c('path',{attrs:{"d":"M33 4h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1zm0 10h-4a.986.986 0 00-.95.753 12.22 12.22 0 015.95 2.14V15a1 1 0 00-1-1zm-7.5-8h-7a.5.5 0 00-.5.5V16h-5.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H18v.635A12.326 12.326 0 0121.52 16H20V8h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM9 12H3a1 1 0 00-1 1v9.2a1 1 0 001 1h6a1 1 0 001-1V13a1 1 0 00-1-1zm18.1 6.2a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5h-3.5v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3.5h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3.5v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v3.5h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    