
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
            children.concat([_c('path',{attrs:{"d":"M25.6 2.106L18 5.905l-7.553-3.777a1 1 0 00-.894 0l-7 3.5A1 1 0 002 6.523v25.764a1 1 0 001.447.894L10 29.905l7.553 3.776a1 1 0 00.894 0L26 29.905l8.629 3.451A1 1 0 0036 32.428V6.582a1 1 0 00-.629-.929l-8.954-3.581a1 1 0 00-.817.034zM18 31.741l-8-4V4l8 4zm16-.711l-8-3.125v-24l8 3.125z"}})])
          )
        }
      }
    