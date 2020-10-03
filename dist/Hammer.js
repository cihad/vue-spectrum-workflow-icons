
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
            children.concat([_c('path',{attrs:{"d":"M11.591 4.066l-5.08 5.08a1.455 1.455 0 000 2.063l.344.33-1.51 1.573a.968.968 0 00-1.392-.041l-1.55 1.55a.727.727 0 000 1.03l4.109 4.108a.726.726 0 001.029 0l1.55-1.55c.569-.568-.023-1.374-.023-1.374l1.594-1.535a1.457 1.457 0 002.046-.013l.866-.867 16.869 16.869a1.455 1.455 0 002.059 0l1.366-1.366a1.455 1.455 0 000-2.059L17 11l.565-.565a1.456 1.456 0 000-2.058l-.684-.684s2.012-2.257 2.434-2.68c1.777-1.777 5.711-.631 5.893-1.541s-8.736-4.287-13.617.594z"}})])
          )
        }
      }
    