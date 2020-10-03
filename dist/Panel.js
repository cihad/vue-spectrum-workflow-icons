
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
            children.concat([_c('rect',{attrs:{"height":"3","rx":"1","ry":"1","width":"16","x":"10","y":"30"}}),_c('rect',{attrs:{"height":"3","rx":"1","ry":"1","width":"16","x":"10","y":"8"}}),_c('rect',{attrs:{"height":"3","rx":"1","ry":"1","width":"16","x":"10","y":"14"}}),_c('path',{attrs:{"d":"M30.5 2h-25A1.5 1.5 0 004 3.5V34h2v-8h24v8h2V3.5A1.5 1.5 0 0030.5 2zM30 22H6V4h24z"}})])
          )
        }
      }
    