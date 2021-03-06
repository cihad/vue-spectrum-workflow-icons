
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
            children.concat([_c('path',{attrs:{"d":"M2.035 18.754A16 16 0 0134 19.813c0 .072-.013.142-.014.214l-3.02-.327a12.126 12.126 0 00-.344-2.892 13.2 13.2 0 00-13.17-9.984A13.016 13.016 0 005 19.813a12.878 12.878 0 00.691 4.117.492.492 0 01-.116.506L4.013 26a.5.5 0 01-.818-.154 15.842 15.842 0 01-1.16-7.092z"}}),_c('path',{attrs:{"d":"M35.154 23.214a.691.691 0 010 1.368L18.186 27.1a3.219 3.219 0 01-3.775-3.166 3.219 3.219 0 013.766-3.177z"}})])
          )
        }
      }
    