
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
            children.concat([_c('path',{attrs:{"d":"M20 2.728v7.19a.489.489 0 00.353.466 7.96 7.96 0 010 15.234.489.489 0 00-.353.466v7.189a.513.513 0 00.587.506 15.986 15.986 0 000-31.555.513.513 0 00-.587.504zm-7.041 9.099a8.036 8.036 0 012.69-1.444A.486.486 0 0016 9.92V2.729a.514.514 0 00-.587-.506A15.977 15.977 0 006.3 7.111a.511.511 0 00.1.767l5.98 3.982a.485.485 0 00.579-.033zM10 18a7.914 7.914 0 01.333-2.275.486.486 0 00-.193-.551L4.168 11.2a.513.513 0 00-.748.206 15.989 15.989 0 0011.993 22.371.513.513 0 00.587-.506v-7.188a.489.489 0 00-.353-.466A7.977 7.977 0 0110 18z"}})])
          )
        }
      }
    