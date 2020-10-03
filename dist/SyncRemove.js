
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
            children.concat([_c('path',{attrs:{"d":"M22 13V7a1 1 0 00-1-1H10V1.207a.5.5 0 00-.854-.353L0 10l5.33 5.33a12.3 12.3 0 013.57-.53c.371 0 .736.023 1.1.056V14h11a1 1 0 001-1zm4.854-.146a.5.5 0 00-.854.353V18h-8.846a12.253 12.253 0 013.99 8H26v4.793a.5.5 0 00.854.353L36 22zM8.9 18.2a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5.826 12.267a.5.5 0 010 .707l-1.752 1.752a.5.5 0 01-.707 0L8.9 29.559l-3.367 3.367a.5.5 0 01-.707 0l-1.752-1.752a.5.5 0 010-.707L6.441 27.1l-3.367-3.367a.5.5 0 010-.707l1.752-1.752a.5.5 0 01.707 0L8.9 24.641l3.367-3.367a.5.5 0 01.707 0l1.752 1.752a.5.5 0 010 .707L11.359 27.1z"}})])
          )
        }
      }
    