
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"32","x":"2","y":"26"}}),_c('path',{attrs:{"d":"M2.5 20h10.75a.8.8 0 00.75-.8.784.784 0 00-.235-.56L9.81 14.681l.692-.693a11.447 11.447 0 0119.116 5.074A1.215 1.215 0 0030.78 20h1.894a1 1 0 00.991-1.17A15.43 15.43 0 0014.621 7.165 16.181 16.181 0 007.337 11.5l-.356.357-3.617-3.621A.781.781 0 002.8 8a.8.8 0 00-.8.754V19.5a.5.5 0 00.5.5z"}})])
          )
        }
      }
    