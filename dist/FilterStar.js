
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
            children.concat([_c('path',{attrs:{"d":"M14.8 27a13.146 13.146 0 013.2-8.411c2.083-2.694 11.733-14.972 11.733-14.972A1 1 0 0028.946 2H1.054a1 1 0 00-.787 1.617L12 18.589V33.9a.992.992 0 001.68.825l2.338-2.439A12.131 12.131 0 0114.8 27z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm6.874 7.083l-3.789 3.037 1.281 4.68a.2.2 0 01-.306.222L27 30.461l-4.059 2.665a.2.2 0 01-.306-.222l1.281-4.684-3.789-3.037a.2.2 0 01.117-.36l4.85-.23 1.718-4.542a.2.2 0 01.378 0l1.718 4.542 4.85.23a.2.2 0 01.116.36z"}})])
          )
        }
      }
    