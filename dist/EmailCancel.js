
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
            children.concat([_c('path',{attrs:{"d":"M18 18.188L36 4.665v-1.5A1.147 1.147 0 0034.875 2H1.125A1.147 1.147 0 000 3.167v1.469zm-6.835-2.25L0 7.512v16.683l11.165-8.257zM14.7 27a12.244 12.244 0 012.092-6.863c-.025-.018-.057-.024-.082-.043l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 001.125 30h13.959a12.273 12.273 0 01-.384-3zM27 14.7a12.253 12.253 0 019 3.935V7.541l-9.577 7.188c.193-.009.382-.029.577-.029zm0 3.4a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5.826 12.267a.5.5 0 010 .707l-1.752 1.752a.5.5 0 01-.707 0L27 29.459l-3.367 3.367a.5.5 0 01-.707 0l-1.752-1.752a.5.5 0 010-.707L24.541 27l-3.367-3.367a.5.5 0 010-.707l1.752-1.752a.5.5 0 01.707 0L27 24.541l3.367-3.367a.5.5 0 01.707 0l1.752 1.752a.5.5 0 010 .707L29.459 27z"}})])
          )
        }
      }
    