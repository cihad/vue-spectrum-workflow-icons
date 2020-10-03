
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
            children.concat([_c('path',{attrs:{"d":"M33.965 18.754A16 16 0 002 19.813c0 .072.013.142.014.214l3.02-.327a12.126 12.126 0 01.344-2.892 13.2 13.2 0 0113.17-9.984A13.016 13.016 0 0131 19.813a12.878 12.878 0 01-.691 4.117.492.492 0 00.116.506L31.987 26a.5.5 0 00.818-.154 15.842 15.842 0 001.16-7.092z"}}),_c('path',{attrs:{"d":"M.846 23.214a.691.691 0 000 1.368L17.814 27.1a3.219 3.219 0 003.775-3.166 3.219 3.219 0 00-3.766-3.177z"}})])
          )
        }
      }
    