
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
            children.concat([_c('circle',{attrs:{"cx":"7.939","cy":"6.25","r":"3.75"}}),_c('path',{attrs:{"d":"M21.506 10h-8.75l4.375-7.5 4.375 7.5z"}}),_c('circle',{attrs:{"cx":"11.939","cy":"30.25","r":"3.75"}}),_c('path',{attrs:{"d":"M27.603 34h-8.75l4.375-7.5 4.375 7.5zm4.518-24h-8.75l4.375-7.5 4.375 7.5zm-4.182 2.058h-20v1.222a1.514 1.514 0 00.723 1.3l5.689 4.02a3.056 3.056 0 011.114 2.377v4.193a.733.733 0 00.714.75H19.7a.733.733 0 00.714-.75v-4.194a3.056 3.056 0 011.113-2.376l5.689-4.015a1.514 1.514 0 00.723-1.3z"}})])
          )
        }
      }
    