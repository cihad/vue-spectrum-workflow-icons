
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
            children.concat([_c('circle',{attrs:{"cx":"8","cy":"8","r":"6"}}),_c('circle',{attrs:{"cx":"6","cy":"24","r":"4"}}),_c('path',{attrs:{"d":"M26.5 14.338a4.941 4.941 0 10-6.547.507 10.04 10.04 0 106.547-.507z"}})])
          )
        }
      }
    