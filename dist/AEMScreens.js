
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 2H2a2 2 0 00-2 2v18a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zm0 20H2V4h10zM23.798 9.34a3.34 3.34 0 113.34 3.34 3.34 3.34 0 01-3.34-3.34zM32 18.702v6.088a.922.922 0 01-.91.934h-.908l-.91 9.342a.922.922 0 01-.908.934h-2.728a.922.922 0 01-.909-.934l-.909-9.342h-.909A.922.922 0 0122 24.79v-6.088a4.901 4.901 0 014.833-4.967h.334A4.901 4.901 0 0132 18.702zM36 3v12a1 1 0 01-1 1h-1.239a7.488 7.488 0 00-1.44-2H34V4H18v10h3.66a7.455 7.455 0 00-1.415 2H17a1 1 0 01-1-1V3a1 1 0 011-1h18a1 1 0 011 1z"}})])
          )
        }
      }
    