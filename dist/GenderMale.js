
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
            children.concat([_c('circle',{attrs:{"cx":"17.25","cy":"3.948","r":"3.948"}}),_c('path',{attrs:{"d":"M17.475 9h-.45c-3.6 0-6.525 1.814-6.525 5.453v9.413a.562.562 0 00.563.563h2.186L14.28 35.51a.563.563 0 00.558.49h4.812a.562.562 0 00.558-.489l1.038-11.082h2.192a.562.562 0 00.562-.563v-9.413C24 10.814 21.079 9 17.475 9z"}})])
          )
        }
      }
    