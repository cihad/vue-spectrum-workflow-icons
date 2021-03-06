
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
            children.concat([_c('path',{attrs:{"d":"M32 18l-.047-13.004a1 1 0 00-1-.996H22V1a1 1 0 00-1-1h-6a1 1 0 00-1 1v3H5a1 1 0 00-1 1v13l13.973-2.994zM8 8h20v2H8zm27.217 13.826L18 18l2 18h9.044a.989.989 0 001-.848C30.585 30.106 36 30.962 36 26v-3.198a1 1 0 00-.783-.976zM0 22.802V26c0 4.962 5.415 4.106 5.956 9.152a.989.989 0 001 .848H18V18L.783 21.826a1 1 0 00-.783.976z"}})])
          )
        }
      }
    