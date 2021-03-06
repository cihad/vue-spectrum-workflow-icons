
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
            children.concat([_c('path',{attrs:{"d":"M20.5 6.714a6.788 6.788 0 016.538 8.606 5.492 5.492 0 01.605-.034 5.357 5.357 0 010 10.714H6.214a3.215 3.215 0 010-6.429h.359v-1.428a5.718 5.718 0 017.2-5.519 6.788 6.788 0 016.727-5.91zm0-2a8.811 8.811 0 00-8.233 5.715 7.724 7.724 0 00-7.69 7.406A5.214 5.214 0 006.214 28h21.429a7.357 7.357 0 001.643-14.529A8.8 8.8 0 0020.5 4.714z"}})])
          )
        }
      }
    