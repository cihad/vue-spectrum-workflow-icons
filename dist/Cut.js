
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
            children.concat([_c('path',{attrs:{"d":"M29.912 22.12c0-.007.035-.028.026-.028a8.481 8.481 0 01-7.138-4.018c-.017-.028-.046-.047-.065-.074.019-.027.048-.046.065-.074a8.481 8.481 0 017.142-4.018c.009 0-.023-.021-.026-.028a5.917 5.917 0 10-3.93-1.588l-6.47 3.444-12.6-6.7a4 4 0 00-3.8.023L.822 10.313 15.26 18 .822 25.687l2.292 1.255a4 4 0 003.8.023l12.6-6.7 6.47 3.444a5.892 5.892 0 103.93-1.588zm.367-18.038a3.933 3.933 0 11-4.2 3.641 3.932 3.932 0 014.2-3.641zm0 27.836a3.933 3.933 0 113.641-4.2 3.933 3.933 0 01-3.641 4.2z"}})])
          )
        }
      }
    