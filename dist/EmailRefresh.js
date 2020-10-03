
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
            children.concat([_c('path',{attrs:{"d":"M18 18.188L36 4.665v-1.5A1.147 1.147 0 0034.875 2H1.125A1.147 1.147 0 000 3.167v1.469zm-6.835-2.25L0 7.512v16.683l11.165-8.257zM14.7 27a12.244 12.244 0 012.092-6.863c-.025-.018-.057-.024-.082-.043l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 001.125 30h13.959a12.273 12.273 0 01-.384-3zM27 33.435a6.212 6.212 0 01-4.771-2.123L24.537 29H18v6.55l2.5-2.509A8.744 8.744 0 0027 36a9.3 9.3 0 009-9h-2.28A6.889 6.889 0 0127 33.435zm6.558-12.477A9.215 9.215 0 0027 18a9.3 9.3 0 00-9 9h2.28A6.889 6.889 0 0127 20.565a6.283 6.283 0 014.871 2.116L29.6 25H36v-6.535zM36 14.216V7.541l-9.577 7.188c.192-.009.382-.029.577-.029a12.152 12.152 0 016.548 1.928z"}})])
          )
        }
      }
    