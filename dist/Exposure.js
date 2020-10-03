
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
            children.concat([_c('path',{attrs:{"d":"M6.17 7.266a15.805 15.805 0 00-3.4 15.558h8.565zm18.345-3.855A15.843 15.843 0 008.786 4.94l2.643 7.966zm9.427 15.743c.03-.382.058-.764.058-1.154a15.951 15.951 0 00-6.458-12.812L21.043 9.9zm-7.092-1.128l-5.006 15.482a16 16 0 0011.448-10.862zm-8.54 15.958l2.568-7.944H4.183A15.98 15.98 0 0018 34c.105 0 .207-.008.31-.016z"}})])
          )
        }
      }
    