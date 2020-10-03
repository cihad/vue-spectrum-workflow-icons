
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"32","x":"2","y":"16"}}),_c('circle',{attrs:{"cx":"18","cy":"6","r":"3.8"}}),_c('circle',{attrs:{"cx":"18","cy":"30","r":"3.8"}})])
          )
        }
      }
    