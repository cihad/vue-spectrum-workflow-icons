
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
            children.concat([_c('path',{attrs:{"d":"M23 21h3V10.5a.5.5 0 00-.5-.5H16v3h7z"}}),_c('path',{attrs:{"d":"M28.5 23H13V6.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5V10H6.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H10v12.5a.5.5 0 00.5.5H23v3.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V26h2.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5zm-.236-20h-.23V.5a.5.5 0 00-.5-.5.493.493 0 00-.35.147l-4.037 3.537a.5.5 0 000 .632l4.034 3.537a.493.493 0 00.35.147.5.5 0 00.5-.5V4.958h.23a3.786 3.786 0 013.781 3.892v.827a.325.325 0 00.326.326h1.3A.326.326 0 0034 9.674v-.827A5.74 5.74 0 0028.264 3zM8.819 28.147a.493.493 0 00-.35-.147.5.5 0 00-.5.5v2.541h-.23a3.786 3.786 0 01-3.781-3.892v-.827A.325.325 0 003.629 26h-1.3a.326.326 0 00-.329.326v.827A5.74 5.74 0 007.736 33h.23v2.5a.5.5 0 00.5.5.493.493 0 00.35-.147l4.034-3.537a.5.5 0 000-.632z"}})])
          )
        }
      }
    