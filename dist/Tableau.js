
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
            children.concat([_c('path',{attrs:{"d":"M24 16.5h-4.5V12h-3v4.5H12v3h4.5V24h3v-4.5H24v-3zM21 3.75h-2.25V1.5h-1.5v2.25H15v1.5h2.25V7.5h1.5V5.25H21v-1.5zm0 27h-2.25V28.5h-1.5v2.25H15v1.5h2.25v2.25h1.5v-2.25H21v-1.5zm13.5-13.5h-2.25V15h-1.5v2.25H28.5v1.5h2.25V21h1.5v-2.25h2.25v-1.5zm-27 0H5.25V15h-1.5v2.25H1.5v1.5h2.25V21h1.5v-2.25H7.5v-1.5zm23.7-9.075h-3.375V4.8h-2.25v3.375H22.2v2.25h3.375V13.8h2.25v-3.375H31.2v-2.25zm-17.4 0h-3.375V4.8h-2.25v3.375H4.8v2.25h3.375V13.8h2.25v-3.375H13.8v-2.25zm17.4 17.4h-3.375V22.2h-2.25v3.375H22.2v2.25h3.375V31.2h2.25v-3.375H31.2v-2.25zm-17.4 0h-3.375V22.2h-2.25v3.375H4.8v2.25h3.375V31.2h2.25v-3.375H13.8v-2.25z"}})])
          )
        }
      }
    