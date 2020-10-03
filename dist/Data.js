
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
            children.concat([_c('ellipse',{attrs:{"cx":"18","cy":"7","rx":"16","ry":"5"}}),_c('path',{attrs:{"d":"M18 24.275c-4.936 0-14.212-1.169-16-4V29c0 2.761 7.163 5 16 5s16-2.239 16-5v-8.73c-2.447 3.095-11.064 4.005-16 4.005z"}}),_c('path',{attrs:{"d":"M18 14.275c-4.936 0-14.212-1.169-16-4.005V17c0 2.761 7.163 5 16 5s16-2.239 16-5v-6.73c-2.447 3.095-11.064 4.005-16 4.005z"}})])
          )
        }
      }
    