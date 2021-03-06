
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
            children.concat([_c('circle',{attrs:{"cx":"20.757","cy":"19.283","r":"2.5"}}),_c('path',{attrs:{"d":"M20.865.409l.1 2.842a2.318 2.318 0 001.186 1.939l2.482 1.39-2.843.1a2.317 2.317 0 00-1.938 1.184l-1.39 2.482-.1-2.843a2.317 2.317 0 00-1.184-1.939l-2.482-1.39 2.843-.1a2.318 2.318 0 001.936-1.184zm8.821 5.132l.133 3.659a2.984 2.984 0 001.524 2.5l3.2 1.79-3.661.133a2.982 2.982 0 00-2.5 1.524l-1.791 3.2-.132-3.661a2.986 2.986 0 00-1.525-2.5l-3.2-1.791 3.661-.132a2.987 2.987 0 002.5-1.525z"}}),_c('path',{attrs:{"d":"M26 22v6.463l-3.687-3.686a2 2 0 00-2.828 0l-3.071 3.071-7.556-7.556a2 2 0 00-2.829 0L2 24.321V14h21l-3-2H1a1 1 0 00-1 1v18a1 1 0 001 1h26a1 1 0 001-1V19z"}})])
          )
        }
      }
    