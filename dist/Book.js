
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
            children.concat([_c('path',{attrs:{"d":"M19.782 28H9.995a4 4 0 010-8h10.523a1 1 0 00.8-.4l11.1-14.8a.5.5 0 00-.4-.8H16.025a1 1 0 00-.8.4L3.522 19.328A7.981 7.981 0 009.969 32h10.549a1 1 0 00.8-.4l11.1-14.8a.5.5 0 00-.4-.8h-3.236z"}})])
          )
        }
      }
    