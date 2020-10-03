
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
            children.concat([_c('path',{attrs:{"d":"M33.174 16.724A13.773 13.773 0 0031.9 12.26a7.712 7.712 0 01-2.736 2.45A10.216 10.216 0 0128 23.955a5.236 5.236 0 102.327 2.7 13.676 13.676 0 002.847-9.931zM17.728 28.325a10.278 10.278 0 01-7.222-5.1 5.187 5.187 0 10-5.633.324 5.147 5.147 0 002.242.654 13.7 13.7 0 0011.4 7.708 7.808 7.808 0 01-.787-3.586zM28.073 3.357a5.185 5.185 0 00-6.567 1.209A13.744 13.744 0 008.768 9.531a13.943 13.943 0 00-1.2 1.741 7.73 7.73 0 013.538.924c.117-.163.235-.326.362-.483a10.23 10.23 0 016.92-3.77 10.64 10.64 0 011.11-.059c.277 0 .552.016.826.038a5.184 5.184 0 107.746-4.565z"}})])
          )
        }
      }
    