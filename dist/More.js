
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
            children.concat([_c('circle',{attrs:{"cx":"17.8","cy":"18.2","r":"3.8"}}),_c('circle',{attrs:{"cx":"29.5","cy":"18.2","r":"3.8"}}),_c('circle',{attrs:{"cx":"6.1","cy":"18.2","r":"3.68"}})])
          )
        }
      }
    