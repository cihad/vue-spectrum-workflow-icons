
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
            children.concat([_c('path',{attrs:{"d":"M16 4h-4v2h4zm6 0h-4v2h4zM2 6h2V4H2a2 2 0 00-2 2v2h2zm32 8h2v-4h-2zm0 2.893a12.279 12.279 0 012 1.743V16h-2zM24 6h4V4h-4zm10-2h-4v2h4v2h2V6a2 2 0 00-2-2zM2 10H0v4h2zm0 6H0v4h2zm16.213-1.861L16.22 8.911a.235.235 0 00-.439 0l-1.993 5.228-5.63.261a.233.233 0 00-.137.415l4.4 3.5-1.487 5.385a.234.234 0 00.355.257L16 20.894l.238.155a12.322 12.322 0 017.235-5.83l.5-.4a.233.233 0 00-.137-.415zM14 30v2h1.769a12.223 12.223 0 01-.685-2zm-6 2h4v-2H8zm2-28H6v2h4zM2 22H0v4h2zm0 6H0v2a2 2 0 002 2h4v-2H2zm25-9.9a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h9a.5.5 0 01.5.5z"}})])
          )
        }
      }
    