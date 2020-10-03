
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
            children.concat([_c('path',{attrs:{"d":"M32 32H18V4h14zm2 1V3a1 1 0 00-1-1H17a1 1 0 00-1 1v30a1 1 0 001 1h16a1 1 0 001-1z"}}),_c('rect',{attrs:{"height":"10","rx":"1","ry":"1","transform":"rotate(90 7 18)","width":"32","x":"-9","y":"13"}})])
          )
        }
      }
    