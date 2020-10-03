
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
            children.concat([_c('path',{attrs:{"d":"M34 14a12 12 0 00-23.483-3.483 12.038 12.038 0 012.3-.457A10 10 0 1125.94 23.185a12.038 12.038 0 01-.457 2.3A12 12 0 0034 14z"}}),_c('path',{attrs:{"d":"M14 12h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2zm0 4h2v2h-2z"}}),_c('path',{attrs:{"d":"M24 25.817V24h-2v2a11.986 11.986 0 01-2-.18V24h-2v1.3a11.939 11.939 0 01-2-.922V24h-.628A11.886 11.886 0 0114 22.926V22h-.926A12.173 12.173 0 0112 20.628V20h-.381a11.856 11.856 0 01-.921-2H12v-2h-1.82a11.986 11.986 0 01-.18-2h2v-2h-1.817a12.068 12.068 0 01.334-1.482 12 12 0 1014.966 14.964 12.128 12.128 0 01-1.483.335z"}}),_c('path',{attrs:{"d":"M20 22h2v2h-2zm2-2h2v2h-2zm-2-2h2v2h-2zm2-2h2v2h-2zm-2-2h2v2h-2zm-2-2h2v2h-2zm8 10h-2v2h1.817A11.881 11.881 0 0026 22zm-.7-4H24v2h1.82a11.908 11.908 0 00-.52-2zM24 15.372V16h.381a11.785 11.785 0 00-.381-.628zM12 12h2v-2a11.881 11.881 0 00-2 .183zm4-1.82V12h2v-1.3a11.908 11.908 0 00-2-.52zm4 1.439V12h.628a11.785 11.785 0 00-.628-.381zm2 1.455V14h.926a11.9 11.9 0 00-.926-.926z"}})])
          )
        }
      }
    