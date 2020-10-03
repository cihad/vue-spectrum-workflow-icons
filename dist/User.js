
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
            children.concat([_c('path',{attrs:{"d":"M32.949 34a.993.993 0 001-1.053c-.661-7.184-8.027-9.631-10.278-9.827C22.026 22.977 22 21.652 22 20c0 0 3.532-3.943 3.532-8.958C25.532 5.617 22.445 2 18 2s-7.532 3.617-7.532 9.042C10.468 16.057 14 20 14 20c0 1.652-.026 2.977-1.674 3.12-2.251.2-9.617 2.643-10.278 9.827a.993.993 0 001 1.053z"}})])
          )
        }
      }
    