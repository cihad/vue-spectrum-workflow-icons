
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
            children.concat([_c('path',{attrs:{"d":"M27 .1A8.9 8.9 0 1035.9 9 8.9 8.9 0 0027 .1zM29.684 14h-5.631c-.127 0-.163-.054-.145-.163l-.008-1.856a.174.174 0 01.2-.163h1.68V6.371a15.522 15.522 0 01-1.953.507c-.126.018-.163-.018-.163-.127V5.177c0-.091.019-.145.127-.163a11.585 11.585 0 002.339-.924.667.667 0 01.311-.09h1.479c.091 0 .109.054.109.127v7.691h1.619c.127 0 .163.055.181.163v1.82c.017.145-.037.199-.145.199z"}}),_c('path',{attrs:{"d":"M27 21.3A12.3 12.3 0 0114.7 9c0-.338.024-.669.05-1H4a2 2 0 00-2 2v22a2 2 0 002 2h22a2 2 0 002-2V21.25c-.331.026-.662.05-1 .05z"}})])
          )
        }
      }
    