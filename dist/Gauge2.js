
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
            children.concat([_c('path',{attrs:{"d":"M6.7 13.613l-1.535-3.326A15.912 15.912 0 002 19.813a13.828 13.828 0 001.394 5.867.5.5 0 00.806.133l1.375-1.376a.491.491 0 00.116-.508 12.467 12.467 0 01-.313-7.12A13.137 13.137 0 016.7 13.613zm27.263 5.141a16.133 16.133 0 00-15.4-14.932 15.939 15.939 0 00-7.222 1.459l1.986 2.49a12.562 12.562 0 015.22-.947A13.016 13.016 0 0131 19.813a12.878 12.878 0 01-.691 4.117.492.492 0 00.116.506L31.987 26a.5.5 0 00.818-.154 15.842 15.842 0 001.16-7.092zM9.01 7.089a.867.867 0 00-1.483.874l7.711 17.643a3.219 3.219 0 004.646 1.639 3.219 3.219 0 00.819-4.858z"}})])
          )
        }
      }
    