
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
            children.concat([_c('circle',{attrs:{"cx":"7","cy":"11","r":"1.3"}}),_c('circle',{attrs:{"cx":"27","cy":"11","r":"1.3"}}),_c('circle',{attrs:{"cx":"17","cy":"5","r":"1.3"}}),_c('circle',{attrs:{"cx":"11","cy":"7","r":"1.3"}}),_c('circle',{attrs:{"cx":"23","cy":"7","r":"1.3"}}),_c('path',{attrs:{"d":"M6 14H.5a.5.5 0 00-.5.5v11a.5.5 0 00.5.5H6zm27.5 0H28v12h5.5a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5zM17 18c1.807 0 4.983-1 4.983-2.983L21.965 14H12v1.041C12 17 15.18 18 17 18z"}}),_c('path',{attrs:{"d":"M24.1 14v1c0 3-3.234 5.1-7.1 5.1S9.9 18 9.9 15v-1H8v12h18V14z"}})])
          )
        }
      }
    