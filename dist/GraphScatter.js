
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
            children.concat([_c('circle',{attrs:{"cx":"18","cy":"16","r":"2.2"}}),_c('circle',{attrs:{"cx":"16","cy":"8","r":"2.2"}}),_c('circle',{attrs:{"cx":"30","cy":"6","r":"2.2"}}),_c('circle',{attrs:{"cx":"20","cy":"20","r":"2.2"}}),_c('circle',{attrs:{"cx":"26","cy":"16","r":"2.2"}}),_c('circle',{attrs:{"cx":"12","cy":"20","r":"2.2"}}),_c('circle',{attrs:{"cx":"12","cy":"10","r":"2.2"}}),_c('circle',{attrs:{"cx":"16","cy":"28","r":"2.2"}}),_c('circle',{attrs:{"cx":"6","cy":"30","r":"2.2"}})])
          )
        }
      }
    