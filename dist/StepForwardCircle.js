
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm-4 23a1 1 0 01-1 1h-2a1 1 0 01-1-1V11a1 1 0 011-1h2a1 1 0 011 1zm14.4-6.219L19.625 25.8A1 1 0 0118 25.017V10.983a1 1 0 011.625-.781l8.775 7.017a1 1 0 010 1.562z"}})])
          )
        }
      }
    