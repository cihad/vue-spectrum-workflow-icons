
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
            children.concat([_c('path',{attrs:{"d":"M33.191 1.113L1.8 10.478a.5.5 0 00-.08.926l7.92 3.954zM15.614 22.355L10.08 19.25v7.639a.713.713 0 001.174.544l3.763-3.169a12.206 12.206 0 01.597-1.909zM27 14.7a12.3 12.3 0 012.827.339l5.81-12.676-22.548 14.668 4.378 2.2A12.273 12.273 0 0127 14.7zm0 3.4a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.127a.5.5 0 010-.707l1.036-1.036a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.702-.005z"}})])
          )
        }
      }
    