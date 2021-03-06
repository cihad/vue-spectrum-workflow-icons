
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
            children.concat([_c('ellipse',{attrs:{"cx":"18","cy":"7","rx":"16","ry":"5"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm4.9 10.4h-3.4v3.4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-3.4h-3.4a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h3.4v-3.4a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3.4h3.4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM15 27a11.972 11.972 0 01.347-2.82C10.288 23.856 3.5 22.653 2 20.27V29c0 2.683 6.769 4.866 15.258 4.988A11.932 11.932 0 0115 27z"}}),_c('path',{attrs:{"d":"M27 15a11.924 11.924 0 016.961 2.238A1.5 1.5 0 0034 17v-6.73c-2.447 3.1-11.064 4-16 4s-14.212-1.168-16-4V17c0 2.562 6.171 4.671 14.12 4.963A11.989 11.989 0 0127 15z"}})])
          )
        }
      }
    