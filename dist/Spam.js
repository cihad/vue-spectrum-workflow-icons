
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
            children.concat([_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.934 6.934 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777zM18 18.188L36 4.665v-1.5A1.147 1.147 0 0034.875 2H1.125A1.147 1.147 0 000 3.167v1.469zm-6.835-2.25L0 7.512v16.683l11.165-8.257zM14.7 27a12.244 12.244 0 012.092-6.863c-.025-.018-.057-.024-.082-.043l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 001.125 30h13.959a12.273 12.273 0 01-.384-3zM27 14.7a12.253 12.253 0 019 3.935V7.541l-9.577 7.188c.193-.009.382-.029.577-.029z"}})])
          )
        }
      }
    