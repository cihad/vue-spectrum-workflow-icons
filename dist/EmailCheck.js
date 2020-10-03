
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
            children.concat([_c('path',{attrs:{"d":"M18 18.188L36 4.665v-1.5A1.146 1.146 0 0034.875 2H1.125A1.147 1.147 0 000 3.167v1.468zm-6.835-2.25L0 7.511v16.684l11.165-8.257zM14.7 27a12.24 12.24 0 012.092-6.863c-.026-.018-.057-.024-.082-.043l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 001.125 30h13.959a12.272 12.272 0 01-.384-3zM27 14.7a12.253 12.253 0 019 3.936V7.541l-9.577 7.188c.193-.009.382-.029.577-.029zm0 3.4a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.127a.5.5 0 010-.707l1.036-1.036a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.702-.005z"}})])
          )
        }
      }
    