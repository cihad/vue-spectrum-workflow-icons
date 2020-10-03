
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
            children.concat([_c('path',{attrs:{"d":"M23.715 4.909h3.571A.721.721 0 0028 4.182V2.727A.721.721 0 0027.286 2h-3.817a2.831 2.831 0 00-2.02.852L18 6.364l-3.449-3.512A2.831 2.831 0 0012.531 2H8.714A.721.721 0 008 2.727v1.455a.721.721 0 00.714.727h3.572l3.791 4.364V22h-4.506a.721.721 0 00-.714.727v1.455a.721.721 0 00.714.727h4.505v1.818l-3.791 4.364H8.714a.721.721 0 00-.714.727v1.455a.721.721 0 00.714.727h3.817a2.831 2.831 0 002.02-.852L18 29.636l3.449 3.512a2.831 2.831 0 002.02.852h3.817a.721.721 0 00.714-.727v-1.455a.721.721 0 00-.714-.727h-3.571l-3.792-4.364v-1.818h4.506a.721.721 0 00.714-.727v-1.455a.721.721 0 00-.714-.727h-4.506V9.273z"}})])
          )
        }
      }
    