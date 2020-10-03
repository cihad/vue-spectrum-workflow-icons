
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
            children.concat([_c('path',{attrs:{"d":"M30.946 2H3.054a1 1 0 00-.787 1.617L14 18.589V33.9a.992.992 0 001.68.824l3.981-4.153a1.219 1.219 0 00.339-.843V18.589L31.733 3.617A1 1 0 0030.946 2z"}})])
          )
        }
      }
    