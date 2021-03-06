
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
            children.concat([_c('circle',{attrs:{"cx":"18","cy":"18","r":"4.201"}}),_c('path',{attrs:{"d":"M26.149 19.5a8.247 8.247 0 01-11.195 6.2l-4.117 6.587A15.969 15.969 0 0033.924 19.5zM19.5 9.851a8.267 8.267 0 014.26 2.19l6.319-4.513A15.951 15.951 0 0019.5 2.076zm12.323.119L25.5 14.489a8.222 8.222 0 01.653 2.011h7.775a15.869 15.869 0 00-2.105-6.53zM12.416 24.1A8.26 8.26 0 0116.5 9.851V2.076A15.981 15.981 0 008.294 30.7z"}})])
          )
        }
      }
    