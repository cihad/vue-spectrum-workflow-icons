
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
            children.concat([_c('path',{attrs:{"d":"M16 27a10.962 10.962 0 01.416-3H12V3a1 1 0 00-1-1H9a1 1 0 00-1 1v5H3a1 1 0 00-1 1v2a1 1 0 001 1h5v15a1 1 0 001 1h7.046c-.03-.329-.046-.663-.046-1zm8-10.584A10.962 10.962 0 0127 16c.337 0 .671.016 1 .046V9a1 1 0 00-1-1H14v4h10zM27 18a9 9 0 109 9 9 9 0 00-9-9zm4.081 9.748l-5.927 6.778a.613.613 0 01-1.027-.642l2-4.749-2.827-1.214a1.059 1.059 0 01-.379-1.67l5.928-6.777a.613.613 0 011.026.642l-2 4.749 2.825 1.214a1.058 1.058 0 01.381 1.669z"}})])
          )
        }
      }
    