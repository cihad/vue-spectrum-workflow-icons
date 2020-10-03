
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
            children.concat([_c('path',{attrs:{"d":"M27 18a9 9 0 109 9 9 9 0 00-9-9zm4.9 10.5h-3.4v3.4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-3.4h-3.4a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h3.4v-3.4a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3.4h3.4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM2 17.5v-1a.5.5 0 01.5-.5h15.6a5 5 0 019.8 0s-.559-.007-.9 0a11.217 11.217 0 00-1.165.061 2.99 2.99 0 10-5.535 2.222 11.105 11.105 0 00-1.506 1.4A4.965 4.965 0 0118.1 18H2.5a.5.5 0 01-.5-.5zm0-10v-1a.5.5 0 01.5-.5h3.6a5 5 0 019.8 0h17.6a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H15.9a5 5 0 01-9.8 0H2.5a.5.5 0 01-.5-.5zM8 7a3 3 0 103-3 3 3 0 00-3 3zm7.842 20.961a3 3 0 110-1.922 11.1 11.1 0 01.565-2.676A4.98 4.98 0 008.1 26H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5.6a4.98 4.98 0 008.306 2.637 11.109 11.109 0 01-.564-2.676z"}})])
          )
        }
      }
    