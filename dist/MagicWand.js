
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","transform":"rotate(-45 12.249 21.751)","width":"30.118","x":"-2.811","y":"19.752"}}),_c('path',{attrs:{"d":"M31.506 13.559l.078 2.156a1.756 1.756 0 00.9 1.47l1.882 1.054-2.156.078a1.756 1.756 0 00-1.47.9L29.684 21.1l-.078-2.156a1.756 1.756 0 00-.9-1.47l-1.882-1.054 2.156-.078a1.759 1.759 0 001.47-.9zM29.732.1l.108 2.99a2.437 2.437 0 001.245 2.038L33.7 6.589l-2.99.108a2.434 2.434 0 00-2.039 1.245l-1.462 2.61-.109-2.99a2.44 2.44 0 00-1.245-2.039l-2.614-1.462 2.99-.108a2.439 2.439 0 002.039-1.245zM12.7 1.68l.139 3.851a3.138 3.138 0 001.6 2.625L17.8 10.04l-3.851.139a3.139 3.139 0 00-2.626 1.6l-1.88 3.365-.143-3.851a3.139 3.139 0 00-1.6-2.626L4.339 6.784l3.851-.139a3.141 3.141 0 002.626-1.6z"}})])
          )
        }
      }
    