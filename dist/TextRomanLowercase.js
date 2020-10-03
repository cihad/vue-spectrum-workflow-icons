
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"4"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"16"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"28"}}),_c('path',{attrs:{"d":"M10 2V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V2zM8 4v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4zm0 10v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V14zm-2 2v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V16zm6-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V14zm-2 2v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V16zM8 26v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V26zm-2 2v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V28zm6-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V26zm-2 2v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V28zm-6-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V26zm-2 2v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V28z"}})])
          )
        }
      }
    