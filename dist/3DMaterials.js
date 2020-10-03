
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
            children.concat([_c('path',{attrs:{"d":"M11.493 27.963a.216.216 0 00-.283-.268c-.734.287-1.852.613-2.335.131-1.524-1.526 1.487-7.762 6.491-12.766s11.3-7.816 12.758-6.36a1.089 1.089 0 01.253 1.011.219.219 0 00.281.249 9.057 9.057 0 011.495-.326.421.421 0 00.367-.379 2.248 2.248 0 00-.5-1.895L30 7.347v-.006A15.952 15.952 0 107.156 29.58a.784.784 0 00.125.1l.01.012a2.087 2.087 0 001.532.529 6.5 6.5 0 002.014-.4.456.456 0 00.3-.361 11.427 11.427 0 01.356-1.497z"}}),_c('path',{attrs:{"d":"M33.5 14.729c-.293-1.771-.939-2.959-2.509-2.959-2.69 0-7.007 2.719-11 6.927-4.736 5-7.466 10.4-6.638 13.144a2.742 2.742 0 002.458 1.887 14.425 14.425 0 002.217.172 14.944 14.944 0 0011-4.744A15.958 15.958 0 0033.5 14.729z"}})])
          )
        }
      }
    