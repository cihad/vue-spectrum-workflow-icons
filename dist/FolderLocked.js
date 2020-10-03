
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
            children.concat([_c('path',{attrs:{"d":"M16 25.012a3.007 3.007 0 012.141-2.875A8.954 8.954 0 0127.047 14c.158 0 .318 0 .477.012A8.754 8.754 0 0134 17.486V9a1 1 0 00-1-1H2v21a1 1 0 001 1h13zM16 6H2V3.5A1.5 1.5 0 013.5 2h7.672a2 2 0 011.414.586z"}}),_c('path',{attrs:{"d":"M35 24h-.955v-1.008a7 7 0 00-14 0V24H19a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V25a1 1 0 00-1-1zm-6.566 7.422v1.928a.694.694 0 01-.694.694h-1.388a.694.694 0 01-.694-.694v-1.928a2.082 2.082 0 112.776 0zM31.545 24h-9v-1.008a4.5 4.5 0 019 0z"}})])
          )
        }
      }
    