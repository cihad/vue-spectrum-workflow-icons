
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm-2.6 4.775a.711.711 0 01.337-.675 6.246 6.246 0 012.225-.458 6.861 6.861 0 012.232.344.777.777 0 01.4.687v2.45c0 2.885-.577 10.891-.683 11.947a.527.527 0 01-.587.52H16.6a.568.568 0 01-.578-.473c-.1-1.364-.622-9.1-.622-11.891zM18 28.85a2.574 2.574 0 01-2.8-2.631 2.66 2.66 0 012.8-2.7 2.632 2.632 0 012.8 2.7A2.574 2.574 0 0118 28.85z"}})])
          )
        }
      }
    