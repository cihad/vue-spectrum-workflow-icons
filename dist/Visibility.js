
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
            children.concat([_c('path',{attrs:{"d":"M24.613 8.58A14.972 14.972 0 0018 6.937c-8.664 0-15.75 8.625-15.75 11.423 0 3 7.458 10.7 15.686 10.7 8.3 0 15.814-7.706 15.814-10.7 0-2.36-4.214-7.341-9.137-9.78zM18 27.225A9.225 9.225 0 1127.225 18 9.225 9.225 0 0118 27.225z"}}),_c('path',{attrs:{"d":"M20.667 18.083A2.667 2.667 0 0118 15.417a2.632 2.632 0 011.35-2.27 4.939 4.939 0 00-1.35-.209A5.063 5.063 0 1023.063 18a4.713 4.713 0 00-.175-1.2 2.625 2.625 0 01-2.221 1.283z"}})])
          )
        }
      }
    