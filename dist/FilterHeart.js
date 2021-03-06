
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
            children.concat([_c('path',{attrs:{"d":"M14.8 27a13.146 13.146 0 013.2-8.411c2.083-2.694 11.733-14.972 11.733-14.972A1 1 0 0028.946 2H1.054a1 1 0 00-.787 1.617L12 18.589V33.9a.992.992 0 001.68.825l2.338-2.439A12.131 12.131 0 0114.8 27z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM27 34s-7-5.4-7-8.273a3.818 3.818 0 013.818-3.818A4.006 4.006 0 0127 23.818a4.006 4.006 0 013.182-1.909A3.818 3.818 0 0134 25.727C34 28.6 27 34 27 34z"}})])
          )
        }
      }
    