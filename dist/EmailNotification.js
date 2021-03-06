
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
            children.concat([_c('path',{attrs:{"d":"M20.576 28.545c.375-.381 1.254-1.27 1.254-5.854a4.825 4.825 0 012.47-4.215L22.866 17.4l-3.576 2.694a2.171 2.171 0 01-2.58 0l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 001.125 30h18.48a4.107 4.107 0 01.971-1.455zm5.355-11.72a3.17 3.17 0 012.641-1.425h.855a3.156 3.156 0 013.121 2.547A4.957 4.957 0 0136 21.463V7.541l-11.221 8.422z"}}),_c('path',{attrs:{"d":"M36 4.665v-1.5A1.147 1.147 0 0034.875 2H1.125A1.147 1.147 0 000 3.167v1.468l18 13.553zM0 7.511v16.683l11.165-8.256L0 7.511zm36 23.566c0-1.077-2.429-.677-2.429-8.385 0-1.718-1.6-2.446-3.571-2.634V18.5a.539.539 0 00-.572-.5h-.857a.539.539 0 00-.572.5v1.558c-1.968.188-3.571.916-3.571 2.634C24.429 30.4 22 30.055 22 31.077v.844h4.667v.3a2.333 2.333 0 004.667 0v-.3H36z"}})])
          )
        }
      }
    