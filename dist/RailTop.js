
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
            children.concat([_c('path',{attrs:{"d":"M1.125 32h33.75A1.147 1.147 0 0036 30.833V5.167A1.147 1.147 0 0034.875 4H1.125A1.147 1.147 0 000 5.167v25.666A1.147 1.147 0 001.125 32zM15.4 8.5a.5.5 0 01.5-.5h17.6a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H15.9a.5.5 0 01-.5-.5zM2 12h32v16H2z"}})])
          )
        }
      }
    