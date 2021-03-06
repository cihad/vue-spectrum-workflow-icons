
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
            children.concat([_c('path',{attrs:{"d":"M29.3 13.613l1.537-3.326A15.912 15.912 0 0134 19.813a13.828 13.828 0 01-1.394 5.867.5.5 0 01-.806.133l-1.375-1.376a.491.491 0 01-.116-.508 12.467 12.467 0 00.313-7.12 13.137 13.137 0 00-1.322-3.196zM2.035 18.754a16.133 16.133 0 0115.4-14.932 15.939 15.939 0 017.222 1.459l-1.986 2.49a12.562 12.562 0 00-5.22-.947A13.016 13.016 0 005 19.813a12.878 12.878 0 00.691 4.117.492.492 0 01-.116.506L4.013 26a.5.5 0 01-.818-.154 15.842 15.842 0 01-1.16-7.092zM26.99 7.089a.867.867 0 011.483.874l-7.71 17.643a3.219 3.219 0 01-4.646 1.639 3.219 3.219 0 01-.819-4.858z"}})])
          )
        }
      }
    