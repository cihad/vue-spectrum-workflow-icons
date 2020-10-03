
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
            children.concat([_c('rect',{attrs:{"height":"2","rx":".354","ry":".354","width":"32","x":"2","y":"6"}}),_c('rect',{attrs:{"height":"2","rx":".354","ry":".354","width":"32","x":"2","y":"14"}}),_c('path',{attrs:{"d":"M32 24v6H4v-6zm1.5-2h-31a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h31a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    