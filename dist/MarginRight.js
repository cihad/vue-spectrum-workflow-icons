
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
            children.concat([_c('path',{attrs:{"d":"M4 4h14v28H4zM2 3v30a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1z"}}),_c('rect',{attrs:{"height":"10","rx":"1","ry":"1","transform":"rotate(-90 29 18)","width":"32","x":"13","y":"13"}})])
          )
        }
      }
    