
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
            children.concat([_c('path',{attrs:{"d":"M34.875 2H1.125A1.147 1.147 0 000 3.167v1.468l18 13.553L36 4.665v-1.5A1.147 1.147 0 0034.875 2zM0 7.511v16.684l11.165-8.257L0 7.511zm16.71 12.583l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 001.125 30h13.959a12.191 12.191 0 011.708-9.863c-.025-.018-.057-.024-.082-.043zM27 14.7a12.253 12.253 0 019 3.935V7.541l-9.577 7.188c.193-.009.382-.029.577-.029zm0 3.4a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM27 34a7 7 0 01-1-13.929v7.136a.674.674 0 00.2.476l2.9 2.9a.673.673 0 00.953 0l.9-.9a.674.674 0 000-.953l-2.054-2.054a.675.675 0 01-.2-.476v-5.993A7 7 0 0127 34z"}})])
          )
        }
      }
    