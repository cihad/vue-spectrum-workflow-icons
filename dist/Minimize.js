
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
            children.concat([_c('path',{attrs:{"d":"M32.077 2.707a1 1 0 00-1.414 0l-6.484 6.484L21.2 6.206A.688.688 0 0020.705 6a.7.7 0 00-.7.7v8.84a.5.5 0 00.459.459H29.3a.7.7 0 00.7-.7.685.685 0 00-.207-.49l-2.984-2.984 6.484-6.484a1 1 0 000-1.414zM15.541 20H6.7a.7.7 0 00-.7.7.685.685 0 00.207.49l2.984 2.984-6.484 6.489a1 1 0 000 1.414l1.216 1.216a1 1 0 001.414 0l6.484-6.484 2.984 2.985A.688.688 0 0015.3 30a.7.7 0 00.7-.7v-8.84a.5.5 0 00-.459-.46z"}})])
          )
        }
      }
    