
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
            children.concat([_c('path',{attrs:{"d":"M22 22v11a1 1 0 01-1 1h-8a1 1 0 01-1-1V22H5.007a.5.5 0 01-.354-.854L17 9l12.346 12.146a.5.5 0 01-.354.854z"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"34","y":"2"}})])
          )
        }
      }
    