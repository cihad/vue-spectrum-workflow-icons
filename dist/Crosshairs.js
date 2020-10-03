
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
            children.concat([_c('path',{attrs:{"d":"M18 15.8a2.2 2.2 0 102.2 2.2 2.2 2.2 0 00-2.2-2.2z"}}),_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm2 29.552V24h-4v7.552A13.7 13.7 0 014.448 20H12v-4H4.448A13.7 13.7 0 0116 4.448V12h4V4.448A13.7 13.7 0 0131.552 16H24v4h7.552A13.7 13.7 0 0120 31.552z"}})])
          )
        }
      }
    