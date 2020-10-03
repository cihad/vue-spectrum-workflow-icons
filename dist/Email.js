
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
            children.concat([_c('path',{attrs:{"d":"M18 20.188L36 6.665v-1.5A1.147 1.147 0 0034.875 4H1.125A1.147 1.147 0 000 5.167v1.469zm6.779-2.225L36 26.367V9.541l-11.221 8.422z"}}),_c('path',{attrs:{"d":"M22.866 19.4l-3.576 2.694a2.172 2.172 0 01-2.58 0l-3.628-2.719L0 29.068v1.766A1.146 1.146 0 001.125 32h33.75A1.146 1.146 0 0036 30.834v-1.59zm-11.701-1.462L0 9.512v16.683l11.165-8.257z"}})])
          )
        }
      }
    