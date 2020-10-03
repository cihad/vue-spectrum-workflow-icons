
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm0 30a14 14 0 1114-14 14 14 0 01-14 14z"}}),_c('path',{attrs:{"d":"M20 16.086V7a1 1 0 00-1-1h-2a1 1 0 00-1 1v10.586a1 1 0 00.293.707L21.9 23.9a1 1 0 001.415 0l1.335-1.336a1 1 0 000-1.414l-4.357-4.358a1 1 0 01-.293-.706z"}})])
          )
        }
      }
    