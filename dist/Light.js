
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
            children.concat([_c('circle',{attrs:{"cx":"18","cy":"18","r":"7.9"}}),_c('rect',{attrs:{"height":"6","rx":".5","ry":".5","width":"3.6","x":"16.2"}}),_c('rect',{attrs:{"height":"6","rx":".5","ry":".5","width":"3.6","x":"16.2","y":"30"}}),_c('rect',{attrs:{"height":"3.6","rx":".5","ry":".5","width":"6","y":"16.2"}}),_c('rect',{attrs:{"height":"3.6","rx":".5","ry":".5","width":"6","x":"30","y":"16.2"}}),_c('rect',{attrs:{"height":"3.6","rx":".5","ry":".5","transform":"rotate(-45 29.02 7.02)","width":"6","x":"26.02","y":"5.22"}}),_c('rect',{attrs:{"height":"3.6","rx":".5","ry":".5","transform":"rotate(-45 7.02 29.02)","width":"6","x":"4.02","y":"27.22"}}),_c('rect',{attrs:{"height":"6","rx":".5","ry":".5","transform":"rotate(-45 7 7)","width":"3.6","x":"5.2","y":"4"}}),_c('rect',{attrs:{"height":"6","rx":".5","ry":".5","transform":"rotate(-45 28.98 28.98)","width":"3.6","x":"27.18","y":"25.98"}})])
          )
        }
      }
    