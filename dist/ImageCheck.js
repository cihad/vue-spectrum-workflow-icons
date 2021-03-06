
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
            children.concat([_c('circle',{attrs:{"cx":"23.8","cy":"12.6","r":"2.5"}}),_c('path',{attrs:{"d":"M14.7 27a12.238 12.238 0 011.262-5.4c-2.108-2.358-4.306-5.6-6.178-5.6C7.113 16 2 24 2 24V6h32v10.893a12.279 12.279 0 012 1.743V5a1.068 1.068 0 00-1.125-1H1.125A1.068 1.068 0 000 5v26a1.069 1.069 0 001.125 1h14.644a12.244 12.244 0 01-1.069-5z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.128a.5.5 0 010-.707l1.036-1.036a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.702-.004z"}})])
          )
        }
      }
    