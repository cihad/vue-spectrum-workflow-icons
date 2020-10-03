
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
            children.concat([_c('path',{attrs:{"d":"M34.94 16H1.06a.8.8 0 01-.769-1.02L3.793 2.725A1 1 0 014.754 2h26.492a1 1 0 01.961.725L35.71 14.98a.8.8 0 01-.77 1.02zM30 18v6H14v-6h-2v14H6V18H4v14a2 2 0 002 2h24a2 2 0 002-2V18zM4 14h2L8 4H6zm8.5 0h2l1-10h-2zm8-10l1 10h2l-1-10zM30 4h-2l2 10h2z"}})])
          )
        }
      }
    