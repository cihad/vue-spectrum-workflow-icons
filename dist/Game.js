
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
            children.concat([_c('path',{attrs:{"d":"M35.091 24.854L32.562 16.4c-1.727-5.765-6.574-10.38-12.033-10.38h-5.821C9.248 6.02 4.4 10.635 2.675 16.4l-2.53 8.454c-.727 2.427 1.4 4.708 3.551 3.81l1.61-1.294a19.328 19.328 0 0124.624 0l1.61 1.294c2.152.898 4.278-1.383 3.551-3.81zm-23.81-4.085a5 5 0 115-5 5 5 0 01-5 5zM23.114 16.2a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zM28.5 23a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"}}),_c('circle',{attrs:{"cx":"11.281","cy":"15.769","r":"2.5"}})])
          )
        }
      }
    