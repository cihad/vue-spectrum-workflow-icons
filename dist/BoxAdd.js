
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
            children.concat([_c('path',{attrs:{"d":"M33.408 8.469l-5.437-2.947-16.516 9.2L18 18.265l.852-.461a12.255 12.255 0 014.905-2.657l9.651-5.228a.824.824 0 000-1.45zm-3 6.72A12.233 12.233 0 0134 16.893v-3.7zM2.592 9.919l5.529 3 16.516-9.2L18.762.535a1.6 1.6 0 00-1.523 0L2.592 8.469a.824.824 0 000 1.45zM16.213 21.09L2 13.193v13.459a1.6 1.6 0 00.823 1.4L16.4 35.594v-2.376a12.259 12.259 0 01-.187-12.128zM27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    