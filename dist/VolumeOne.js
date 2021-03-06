
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
            children.concat([_c('path',{attrs:{"d":"M6.745 12.073H1a1 1 0 00-1 1V23a1 1 0 001 1h5.745a1.428 1.428 0 01.931.345l7.13 7.259A.727.727 0 0016 31.029V5a.726.726 0 00-1.194-.571l-7.127 7.3a1.44 1.44 0 01-.934.344zM22.04 18a6.935 6.935 0 01-1.407 4.192.98.98 0 00.086 1.288l.016.016a.992.992 0 001.487-.09 8.955 8.955 0 00-.022-10.853.992.992 0 00-1.484-.087l-.015.016a.982.982 0 00-.085 1.292A6.943 6.943 0 0122.04 18z"}})])
          )
        }
      }
    