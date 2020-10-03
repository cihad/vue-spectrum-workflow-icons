
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
            children.concat([_c('path',{attrs:{"d":"M20 14v10h10L20 14zM6 11a1 1 0 001 1h22a1 1 0 001-1V2H6z"}}),_c('path',{attrs:{"d":"M19 26a1 1 0 01-1-1V14H7a1 1 0 00-1 1v19h24v-8z"}})])
          )
        }
      }
    