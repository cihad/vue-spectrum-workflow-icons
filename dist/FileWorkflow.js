
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2zm16 25.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V26h-2v6h2v-1.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V34h-3.5a.5.5 0 01-.5-.5V30h-2v3.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V28h2v-3.5a.5.5 0 01.5-.5H30v-1.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5z"}}),_c('path',{attrs:{"d":"M15.5 33.5v-9a3 3 0 013-3h9.172A2.991 2.991 0 0130 19.579V14H19a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h8.551a2.912 2.912 0 01-.051-.5z"}})])
          )
        }
      }
    