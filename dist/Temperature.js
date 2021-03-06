
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
            children.concat([_c('path',{attrs:{"d":"M20 20.368V10h-4v10.368a6 6 0 104 0z"}}),_c('path',{attrs:{"d":"M18 1.8A4.2 4.2 0 0122.2 6v12.941l.715.54A8.126 8.126 0 0126.2 26a8.2 8.2 0 11-16.4 0 8.126 8.126 0 013.285-6.519l.715-.54V6A4.2 4.2 0 0118 1.8zM18 0a6 6 0 00-6 6v12.045a10 10 0 1012 0V6a6 6 0 00-6-6z"}})])
          )
        }
      }
    