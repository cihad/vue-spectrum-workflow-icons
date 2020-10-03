
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
            children.concat([_c('path',{attrs:{"d":"M22.457 17.037L8.232 31.262a2.471 2.471 0 11-3.494-3.494l14.225-14.225zm7.271-14.931a3.591 3.591 0 00-2.546 1.055l-4.525 4.525-1.414-1.414a1 1 0 00-1.414 0l-3.362 3.361a1 1 0 000 1.414l1.081 1.082L3.324 26.354a4.47 4.47 0 106.322 6.322l14.225-14.224 1.082 1.081a1 1 0 001.414 0l3.361-3.361a1 1 0 000-1.415l-1.414-1.414 4.525-4.525a3.6 3.6 0 000-5.092l-.565-.565a3.592 3.592 0 00-2.546-1.055z"}})])
          )
        }
      }
    