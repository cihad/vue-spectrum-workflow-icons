
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
            children.concat([_c('path',{attrs:{"d":"M14 14h9.006a.994.994 0 01.994.994v6.012a.994.994 0 01-.994.994H14v8.912a.5.5 0 01-.848.351L0 18 13.152 4.736a.5.5 0 01.848.352z"}}),_c('rect',{attrs:{"height":"28","rx":".707","ry":".707","width":"4","x":"28","y":"4"}})])
          )
        }
      }
    