
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
            children.concat([_c('path',{attrs:{"d":"M33.293 15.293l-15-15A1 1 0 0017.586 0H5a1 1 0 00-1 1v12.586a1 1 0 00.293.707l15 15a1 1 0 001.414 0l12.586-12.586a1 1 0 000-1.414zM10 8.6A2.6 2.6 0 1112.6 6 2.6 2.6 0 0110 8.6z"}}),_c('path',{attrs:{"d":"M33.293 21.507l-.793-.793-11.793 11.793a1 1 0 01-1.414 0l-15-15A1 1 0 014 16.8v3a1 1 0 00.293.708l15 15a1 1 0 001.414 0l12.586-12.587a1 1 0 000-1.414z"}})])
          )
        }
      }
    