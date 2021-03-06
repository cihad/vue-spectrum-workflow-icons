
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
            children.concat([_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.935 6.935 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777zM18.7 17.944l-9.842-9.8A.488.488 0 008.5 8a.5.5 0 00-.5.5v22.782a.5.5 0 00.5.5.489.489 0 00.35-.148L14 24.656l.928.007a12.263 12.263 0 013.772-6.719z"}}),_c('path',{attrs:{"d":"M4 4h16v12.892a12.234 12.234 0 014-1.808V0H0v24h6v-4H4z"}})])
          )
        }
      }
    