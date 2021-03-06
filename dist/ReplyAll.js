
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
            children.concat([_c('path',{attrs:{"d":"M22.105 6H22V3a.733.733 0 00-.739-.735.718.718 0 00-.513.216l-6.843 6.885a.735.735 0 000 .984l6.843 7.434a.718.718 0 00.513.216.733.733 0 00.739-.735V14a12.429 12.429 0 0112.179 4.785.455.455 0 00.821-.272C35 16.5 32.779 6 22.105 6zM12.27 18.5H12v-3.765a.733.733 0 00-.739-.735.718.718 0 00-.513.216l-8.559 8.292a.735.735 0 000 .984l8.559 8.292a.718.718 0 00.513.216.733.733 0 00.739-.735v-3.548c6.4-1.033 12.118 2.748 15 6.379a.555.555 0 001-.332C28 31.313 25.29 18.5 12.27 18.5z"}})])
          )
        }
      }
    