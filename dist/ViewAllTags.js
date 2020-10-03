
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"4","x":"2","y":"2"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"10","y":"2"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"4","x":"2","y":"10"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"10","y":"10"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"4","x":"2","y":"18"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"4","x":"2","y":"26"}}),_c('path',{attrs:{"d":"M35.668 26.106l-9.88-9.879a.772.772 0 00-.546-.227h-8.47a.772.772 0 00-.772.772v8.471a.772.772 0 00.226.546l9.879 9.88a.772.772 0 001.092 0l8.471-8.469a.772.772 0 000-1.094zM20.4 22.948a2.548 2.548 0 112.548-2.548 2.548 2.548 0 01-2.548 2.548zM14.294 27.2c-.332-.332-.223-.756-.353-1.2H11a1 1 0 00-1 1v2a1 1 0 001 1h6.091zM14 18h-3a1 1 0 00-1 1v2a1 1 0 001 1h3z"}})])
          )
        }
      }
    