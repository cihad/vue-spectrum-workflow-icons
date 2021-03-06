
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
            children.concat([_c('path',{attrs:{"d":"M18.667 17.972A12.259 12.259 0 0134 16.893V7.648a1 1 0 00-.751-.98 19.491 19.491 0 00-4.666-.568 18.988 18.988 0 00-4.112.454 1.093 1.093 0 01-1.3-1.085v-1.61a1.087 1.087 0 00-.814-1.06 19.5 19.5 0 00-4.6-.548 19.432 19.432 0 00-9.75 3v15.161a19.374 19.374 0 019.759-2.995 1.061 1.061 0 01.901.555z"}}),_c('rect',{attrs:{"height":"32","rx":"1","ry":"1","width":"4","x":"2","y":"2"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.934 6.934 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}})])
          )
        }
      }
    