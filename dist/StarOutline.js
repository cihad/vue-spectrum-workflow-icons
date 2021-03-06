
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
            children.concat([_c('path',{attrs:{"d":"M18.059 5.082l3.554 9.5 10.219.481-7.974 6.4 2.671 9.837-8.535-5.568-8.557 5.615 2.7-9.873-7.974-6.4 10.2-.489zm.023-4.259a.737.737 0 00-.7.479l-4.411 11.349-12.2.586a.75.75 0 00-.433 1.334l9.523 7.642-3.229 11.8a.752.752 0 00.724.951.74.74 0 00.41-.126L18 28.122l10.187 6.648a.742.742 0 00.408.125.752.752 0 00.725-.95l-3.189-11.732 9.528-7.653a.75.75 0 00-.434-1.334l-12.2-.575-4.24-11.34a.738.738 0 00-.703-.488z"}})])
          )
        }
      }
    