
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
            children.concat([_c('path',{attrs:{"d":"M0 5.167v25.666A1.146 1.146 0 001.125 32h33.75A1.146 1.146 0 0036 30.833V5.167A1.146 1.146 0 0034.875 4H1.125A1.146 1.146 0 000 5.167zM33.3 11.5a.5.5 0 01-.5.5h-5.6a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h5.6a.5.5 0 01.5.5zm0 6a.5.5 0 01-.5.5h-5.6a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h5.6a.5.5 0 01.5.5zm-6.6 5a.5.5 0 01.5-.5h5.6a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5.6a.5.5 0 01-.5-.5zM2 10h22v20H2z"}})])
          )
        }
      }
    