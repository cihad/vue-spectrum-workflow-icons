
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
            children.concat([_c('path',{attrs:{"d":"M33 8h-7.05L22.6 4.326A1 1 0 0021.859 4h-9.718a1 1 0 00-.739.326L8.05 8H1a1 1 0 00-1 1v20a1 1 0 001 1h32a1 1 0 001-1V9a1 1 0 00-1-1zM17 26.2a8.141 8.141 0 01-5.782-2.418l-1.365 1.365A.5.5 0 019 24.793V20.5a.5.5 0 01.5-.5h4.293a.5.5 0 01.353.854l-1.364 1.364A5.907 5.907 0 0017 24a5.985 5.985 0 005.51-3.688.5.5 0 01.455-.312h1.291a.5.5 0 01.48.643A8.178 8.178 0 0117 26.2zm8-10.7a.5.5 0 01-.5.5h-4.293a.5.5 0 01-.354-.853l1.365-1.365A5.907 5.907 0 0017 12a5.986 5.986 0 00-5.51 3.688.5.5 0 01-.455.312H9.744a.5.5 0 01-.48-.642 8.148 8.148 0 0113.518-3.14l1.364-1.364a.5.5 0 01.854.353z"}})])
          )
        }
      }
    