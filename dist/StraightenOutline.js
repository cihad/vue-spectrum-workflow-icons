
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
            children.concat([_c('path',{attrs:{"d":"M33.5 14H.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h33a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5zm-11.286 2l.018.968C22.232 19.05 18.9 20.1 17 20.1s-5.25-1.05-5.25-3.107V16zM6 26H2V16h4zm20 0H8V16h2v1c0 3 3.134 5 7 5s7-2 7-5v-1h2zm6 0h-4V16h4z"}}),_c('circle',{attrs:{"cx":"7","cy":"11","r":"1.3"}}),_c('circle',{attrs:{"cx":"27","cy":"11","r":"1.3"}}),_c('circle',{attrs:{"cx":"17","cy":"5","r":"1.3"}}),_c('circle',{attrs:{"cx":"11","cy":"7","r":"1.3"}}),_c('circle',{attrs:{"cx":"23","cy":"7","r":"1.3"}})])
          )
        }
      }
    