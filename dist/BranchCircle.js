
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
            children.concat([_c('circle',{attrs:{"cx":"24","cy":"24","r":"2"}}),_c('circle',{attrs:{"cx":"24","cy":"12","r":"2"}}),_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm-3.8 16a4.2 4.2 0 01-.069.683l6.527 2.8a4.425 4.425 0 11-.79 1.837l-6.528-2.8a4.2 4.2 0 110-5.04l6.528-2.8a4.219 4.219 0 11.791 1.837l-6.528 2.8A4.2 4.2 0 0114.2 18z"}})])
          )
        }
      }
    