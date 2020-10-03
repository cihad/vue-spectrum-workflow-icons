
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
            children.concat([_c('path',{attrs:{"d":"M14.077 20.707a1 1 0 00-1.414 0l-6.484 6.484L3.2 24.206A.688.688 0 002.705 24a.7.7 0 00-.7.7v8.84a.5.5 0 00.454.46H11.3a.7.7 0 00.7-.7.685.685 0 00-.207-.49l-2.984-2.989 6.484-6.484a1 1 0 000-1.414zM33.541 2H24.7a.7.7 0 00-.7.705.685.685 0 00.207.49l2.984 2.984-6.484 6.484a1 1 0 000 1.414l1.216 1.216a1 1 0 001.414 0l6.484-6.484 2.984 2.985A.688.688 0 0033.3 12a.7.7 0 00.7-.7V2.459A.5.5 0 0033.541 2z"}})])
          )
        }
      }
    