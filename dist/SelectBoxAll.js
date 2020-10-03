
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
            children.concat([_c('path',{attrs:{"d":"M29.2 8H12.8A4.8 4.8 0 008 12.8v16.4a4.8 4.8 0 004.8 4.8h16.4a4.8 4.8 0 004.8-4.8V12.8A4.8 4.8 0 0029.2 8zm1.223 9.049L18.988 28.573a.8.8 0 01-1.131 0l-6.28-6.278a.8.8 0 010-1.131l2.491-2.491a.8.8 0 011.131 0l3.224 3.227 8.378-8.47a.8.8 0 011.131 0l2.491 2.491a.8.8 0 010 1.128z"}}),_c('path',{attrs:{"d":"M26 2H6.8A4.8 4.8 0 002 6.8V26a4 4 0 004 4V6h24a4 4 0 00-4-4z"}})])
          )
        }
      }
    