
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M20.15 12A2.15 2.15 0 1118 9.85 2.15 2.15 0 0120.15 12zm.183 12H20v-7.6a.4.4 0 00-.4-.4h-3.934s-1.166.032-1.166 1c0 .967 1.167 1 1.167 1H16v6h-.333s-1.167.032-1.167 1c0 .967 1.167 1 1.167 1h4.667s1.166-.033 1.166-1c0-.968-1.167-1-1.167-1zM18 1a17 17 0 1017 17A17 17 0 0018 1zm0 30.35A13.35 13.35 0 1131.35 18 13.35 13.35 0 0118 31.35z"}})])
          )
        }
      }
    