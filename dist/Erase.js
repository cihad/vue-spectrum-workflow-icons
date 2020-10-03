
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
            children.concat([_c('path',{attrs:{"d":"M18.613 28.132a1 1 0 001.414 0l13.562-13.561a1 1 0 000-1.414L22.275 1.843a1 1 0 00-1.414 0L7.3 15.4a1 1 0 000 1.414l.707.707-6.3 6.3a2 2 0 000 2.829l6.505 6.5a2.8 2.8 0 001.921.85H33.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13.331l4.575-4.575zM10.9 31.607a1 1 0 01-1.414 0l-6.368-6.364 6.3-6.3 7.071 7.071z"}})])
          )
        }
      }
    