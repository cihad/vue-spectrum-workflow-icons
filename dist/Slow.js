
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
            children.concat([_c('path',{attrs:{"d":"M33.117 10.673a2.883 2.883 0 00-2.883 2.883 3.843 3.843 0 001.036 2.107l-5.77 9.5c-.012 0 1.167-10.723 1.167-10.723 2.055.223 2.788-1.429 2.788-2.731a2.883 2.883 0 00-5.766 0A2.347 2.347 0 0025.047 14L24 24h-6.055A9.986 9.986 0 102 16c0 4.24 2.194 8.244 8.09 9.027-3.352 2.567-6.377 1.9-8.543 2.37C.131 27.7.712 30 2.162 30h29.529c1.652-.063.292-1.33-1.055-1.772-.827-.272-1.105-1.842-1.105-1.842-.242-.723-.968-1.184-1.523-1.653l4.527-8.482c.076.008.473.187.582.187a2.883 2.883 0 100-5.765z"}})])
          )
        }
      }
    