
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
            children.concat([_c('path',{attrs:{"d":"M35.5 16.08h-28l9.94-9.94a.967.967 0 000-1.4l-.7-.72a1.027 1.027 0 00-1.42 0L2.48 16.88a1.027 1.027 0 000 1.42l12.78 13.68a1.027 1.027 0 001.42 0l.7-.7a1.027 1.027 0 000-1.42L7.52 19H35.5a.5.5 0 00.5-.5v-1.92a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    