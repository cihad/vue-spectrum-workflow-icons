
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
            children.concat([_c('path',{attrs:{"d":"M28 22a5.962 5.962 0 00-4.608 2.2l-9.552-4.867a5.618 5.618 0 000-2.664l9.552-4.869a5.908 5.908 0 10-1.275-2.641l-9.622 4.9a6.015 6.015 0 00-.908-.846l-.008-.006a5.987 5.987 0 00-.989-.6c-.037-.018-.07-.041-.106-.058a5.965 5.965 0 00-.994-.343c-.073-.019-.141-.05-.214-.067a6 6 0 100 11.715c.074-.016.141-.048.214-.067a5.965 5.965 0 00.994-.343c.037-.017.07-.04.106-.058a5.987 5.987 0 00.989-.6l.008-.006a6.015 6.015 0 00.908-.846l9.622 4.9A6 6 0 1028 22zm0-17a3 3 0 11-3 3 3 3 0 013-3zm0 26a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    