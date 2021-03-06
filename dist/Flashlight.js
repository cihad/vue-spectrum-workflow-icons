
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
            children.concat([_c('path',{attrs:{"d":"M27.306 18.66l5.973-5.974a1 1 0 000-1.414l-8.524-8.525a1 1 0 00-1.414 0L17.367 8.72a1 1 0 00-.286.593l-.468 4.078L2.746 27.257a1 1 0 000 1.414l4.61 4.61a1 1 0 001.414 0l13.866-13.867 4.077-.468a1 1 0 00.593-.286zm-10.352.412a2.75 2.75 0 113.889 0 2.75 2.75 0 01-3.889 0z"}})])
          )
        }
      }
    