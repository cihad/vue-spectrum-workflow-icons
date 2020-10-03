
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
            children.concat([_c('path',{attrs:{"d":"M34.875 4H1.125A1.146 1.146 0 000 5.167v25.666A1.146 1.146 0 001.125 32h33.75A1.146 1.146 0 0036 30.833V5.167A1.146 1.146 0 0034.875 4zM9.3 24H2.7v-2h6.6zm0-6H2.7v-2h6.6zm0-6H2.7v-2h6.6zM34 30H12V10h22z"}})])
          )
        }
      }
    