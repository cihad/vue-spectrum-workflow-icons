
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M34.254.34l-.655.129a9.579 9.579 0 00-4.939 2.628L22.238 9.52 3.12 4.305a2 2 0 00-1.94.516L0 6l16.558 9.2-2.96 2.96a8.47 8.47 0 00-.874 1.024l-3.344 4.62L1 23.429l-1 1 6.368 3.537-2.024 2.796a.64.64 0 00.894.894l2.796-2.024L11.57 36l1-1-.375-8.38 4.62-3.344a8.47 8.47 0 001.024-.874l2.96-2.96L30 36l1.18-1.18a2 2 0 00.515-1.94L26.48 13.762l6.421-6.422a9.583 9.583 0 002.63-4.94l.127-.654A1.198 1.198 0 0034.254.341z"}})])
          )
        }
      }
    