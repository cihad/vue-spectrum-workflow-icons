
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15.691 25.772a2.268 2.268 0 012.232-2.304q.084 0 .168.004a2.232 2.232 0 012.4 2.3 2.181 2.181 0 01-2.4 2.234 2.182 2.182 0 01-2.4-2.234zm4.434-16.977a.416.416 0 01.2.367v2.082c0 2.8-.567 7.96-.667 8.962 0 .1-.033.199-.234.199h-2.666a.221.221 0 01-.234-.2c-.066-.933-.6-6.06-.6-8.861V9.26a.355.355 0 01.167-.366 5.766 5.766 0 012-.4 6.55 6.55 0 012.034.3zM35 18A17 17 0 1118 1a17 17 0 0117 17zm-3.65 0A13.35 13.35 0 1018 31.35 13.35 13.35 0 0031.35 18z"}})])
          )
        }
      }
    