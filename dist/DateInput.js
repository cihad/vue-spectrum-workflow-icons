
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
            children.concat([_c('path',{attrs:{"d":"M32 16.909h1.286a.721.721 0 00.714-.727v-1.455a.721.721 0 00-.714-.727h-1.531a2.833 2.833 0 00-2.021.852L28 17.272l-1.734-2.42A2.833 2.833 0 0024.245 14h-1.531a.721.721 0 00-.714.727v1.455a.721.721 0 00.714.728H24l2 3.151v4.849h-3.286a.721.721 0 00-.714.727v1.455a.721.721 0 00.714.727H26v2.121l-2 3.151h-1.286a.721.721 0 00-.714.728v1.455a.721.721 0 00.714.727h1.531a2.833 2.833 0 002.021-.852L28 32.728l1.734 2.42a2.833 2.833 0 002.021.852h1.531a.721.721 0 00.714-.727v-1.455a.721.721 0 00-.714-.728H32l-2-3.15v-2.122h3.286a.721.721 0 00.714-.727v-1.455a.721.721 0 00-.714-.727H30V20.06z"}}),_c('path',{attrs:{"d":"M34 12h2V7a1 1 0 00-1-1h-5V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H12V3a1 1 0 00-1-1H9a1 1 0 00-1 1v3H3a1 1 0 00-1 1v26a1 1 0 001 1h17v-.182A2.717 2.717 0 0120.706 32H4V8h4v1a1 1 0 001 1h2a1 1 0 001-1V8h14v1a1 1 0 001 1h2a1 1 0 001-1V8h4z"}})])
          )
        }
      }
    