
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
            children.concat([_c('path',{attrs:{"d":"M18 12l6-6 6 6-6 6z"}}),_c('rect',{attrs:{"height":"3.155","rx":".789","ry":".789","transform":"rotate(-44.995 30.008 18.01)","width":"12.619","x":"23.7","y":"16.432"}}),_c('rect',{attrs:{"height":"3.155","rx":".789","ry":".789","transform":"rotate(-44.995 18.023 6.023)","width":"12.619","x":"11.713","y":"4.445"}}),_c('path',{attrs:{"d":"M4.06 34.06l-2.12-2.12a1.5 1.5 0 010-2.122L18 15l3 3L6.182 34.06a1.5 1.5 0 01-2.122 0zM34 30v-1a1 1 0 00-1-1H23a1 1 0 00-1 1v1h-1.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    