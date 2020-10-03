
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
            children.concat([_c('path',{attrs:{"d":"M26.922 20.476c-1.441-.125-1.464-1.284-1.464-2.729a13.151 13.151 0 003.09-7.837c0-4.746-2.7-7.91-6.589-7.91a6.3 6.3 0 00-2.679.574c3.206 1.69 5.24 5.28 5.24 9.9a15.6 15.6 0 01-2.42 7.949.861.861 0 00.474 1.288A13.488 13.488 0 0131.779 30h3.257a.871.871 0 00.879-.922c-.579-6.289-7.023-8.43-8.993-8.602z"}}),_c('path',{attrs:{"d":"M28.973 34a.931.931 0 00.941-.988c-.62-6.734-7.525-9.028-9.636-9.212-1.544-.134-1.569-1.377-1.569-2.925a14.093 14.093 0 003.311-8.4C22.02 7.391 19.126 4 14.959 4S7.9 7.391 7.9 12.477a14.093 14.093 0 003.311 8.4c0 1.548-.025 2.791-1.569 2.925-2.113.182-9.018 2.476-9.642 9.21A.931.931 0 00.945 34z"}})])
          )
        }
      }
    