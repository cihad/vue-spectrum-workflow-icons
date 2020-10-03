
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
            children.concat([_c('path',{attrs:{"d":"M13.823 20.473L8 36h.9l9.493-10.935-4.57-4.592zm4.437-6.864L26 2H12l-1.286 4.026 7.546 7.583zm5.383 5.41L28 14h-9.351l4.994 5.019zM7.976 14.598L6.25 20h7.102l-5.376-5.402z"}}),_c('rect',{attrs:{"height":"43.854","rx":".818","ry":".818","transform":"rotate(-45 18 19)","width":"2.455","x":"16.773","y":"-2.926"}})])
          )
        }
      }
    