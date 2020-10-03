
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
            children.concat([_c('path',{attrs:{"d":"M33.5 6H15.9a5 5 0 00-9.8 0H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3.6a5 5 0 009.8 0h17.6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM11 10a3 3 0 113-3 3 3 0 01-3 3zm22.5 16H19.9a5 5 0 00-9.8 0H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h7.6a5 5 0 009.8 0h13.6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM15 30a3 3 0 113-3 3 3 0 01-3 3zM2 16.5v1a.5.5 0 00.5.5h17.6a5 5 0 009.8 0h3.6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3.6a5 5 0 00-9.8 0H2.5a.5.5 0 00-.5.5zm20 .5a3 3 0 113 3 3 3 0 01-3-3z"}})])
          )
        }
      }
    