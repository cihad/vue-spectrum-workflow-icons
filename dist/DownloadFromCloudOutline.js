
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
            children.concat([_c('path',{attrs:{"d":"M29.286 9.471a8.787 8.787 0 00-17.019-3.042 7.722 7.722 0 00-7.689 7.4 5.224 5.224 0 00-3.545 5.544A5.346 5.346 0 006.41 24h5.09a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H6.4a3.336 3.336 0 01-3.391-3.041 3.214 3.214 0 013.209-3.388h.359v-1.428a5.719 5.719 0 017.2-5.519 6.787 6.787 0 1113.268 2.7 5.357 5.357 0 11.6 10.68H24.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h2.9a7.517 7.517 0 007.547-6.484 7.368 7.368 0 00-5.661-8.049z"}}),_c('path',{attrs:{"d":"M22.5 29H20V15a1 1 0 00-1-1h-2a1 1 0 00-1 1v14h-2.5a.5.5 0 00-.5.5.489.489 0 00.117.317l4.519 5.023a.5.5 0 00.728 0l4.519-5.023A.489.489 0 0023 29.5a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    