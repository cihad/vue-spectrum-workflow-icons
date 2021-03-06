
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
            children.concat([_c('path',{attrs:{"d":"M24 12a12 12 0 00-12 12 11.831 11.831 0 0012 11.8A11.662 11.662 0 0035.8 24 11.831 11.831 0 0024 12zm7.242 7.907l-7.224 9.434a1.206 1.206 0 01-.875.461h-.073a1.2 1.2 0 01-.849-.351l-4.837-4.847a1.2 1.2 0 010-1.7l1.327-1.325a1.2 1.2 0 011.7 0l2.4 2.4L27.89 17.3a1.2 1.2 0 011.686-.21l1.455 1.133a1.2 1.2 0 01.211 1.684z"}}),_c('path',{attrs:{"d":"M11.521 14H5a1 1 0 01-1-1v-2a1 1 0 011-1h11.26a15.9 15.9 0 017.055-1.965A11.818 11.818 0 0012 .2 11.662 11.662 0 00.2 12a11.819 11.819 0 007.834 11.315A15.921 15.921 0 0111.521 14z"}})])
          )
        }
      }
    