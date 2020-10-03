
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M30.328 20.005a4.988 4.988 0 00-6.074 3.328H10v-4.398a.5.5 0 00-.83-.376l-6.74 5.898a.5.5 0 000 .753l6.74 5.898a.5.5 0 00.83-.377v-4.398h14.254a4.993 4.993 0 106.074-6.328zM5.672 13.662a4.988 4.988 0 006.074-3.329H26v4.398a.5.5 0 00.83.377l6.74-5.898a.5.5 0 000-.753l-6.74-5.898a.5.5 0 00-.83.376v4.398H11.746a4.993 4.993 0 10-6.074 6.329z"}})])
          )
        }
      }
    