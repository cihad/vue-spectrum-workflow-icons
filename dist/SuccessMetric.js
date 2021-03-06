
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
            children.concat([_c('rect',{attrs:{"height":"8","rx":"1","ry":"1","width":"8","x":"4","y":"26"}}),_c('rect',{attrs:{"height":"24","rx":"1","ry":"1","width":"8","x":"14","y":"10"}}),_c('rect',{attrs:{"height":"12","rx":"1","ry":"1","width":"8","x":"24","y":"22"}}),_c('path',{attrs:{"d":"M12 16H6.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H12zM7.768 6.27L12 8.979l-1.078 1.684-4.233-2.709a.5.5 0 01-.152-.691l.539-.842a.5.5 0 01.692-.151zM16.63 8l-1.9-5.971a.25.25 0 00-.314-.163l-1.43.454a.25.25 0 00-.163.314L14.532 8zM24 16h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H24zm4.232-9.73L24 8.979l1.078 1.684 4.233-2.709a.5.5 0 00.152-.691l-.539-.842a.5.5 0 00-.692-.151zM19.37 8l1.9-5.971a.25.25 0 01.314-.163l1.43.454a.25.25 0 01.163.314L21.468 8z"}})])
          )
        }
      }
    