
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":".894","ry":".894","width":"24","x":"6","y":"32"}}),_c('path',{attrs:{"d":"M25.184 12H21.31a6 6 0 10-6.619 0h-3.875a.816.816 0 00-.816.816v2.367a.816.816 0 00.816.816H15L12 30h12l-3-14h4.184a.816.816 0 00.816-.816v-2.368a.816.816 0 00-.816-.816z"}})])
          )
        }
      }
    