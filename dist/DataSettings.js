
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
            children.concat([_c('ellipse',{attrs:{"cx":"18","cy":"7","rx":"16","ry":"5"}}),_c('path',{attrs:{"d":"M15 27a11.972 11.972 0 01.347-2.82C10.288 23.856 3.5 22.653 2 20.27V29c0 2.683 6.769 4.866 15.258 4.988A11.932 11.932 0 0115 27zm12-12a11.924 11.924 0 016.961 2.238A1.5 1.5 0 0034 17v-6.73c-2.447 3.1-11.064 4-16 4s-14.212-1.168-16-4V17c0 2.562 6.171 4.671 14.12 4.963A11.989 11.989 0 0127 15z"}}),_c('path',{attrs:{"d":"M35.193 25.786h-2.125a6.125 6.125 0 00-.9-2.179l1.513-1.513a.607.607 0 000-.858l-.92-.92a.607.607 0 00-.858 0l-1.511 1.514a6.147 6.147 0 00-2.178-.9v-2.123a.607.607 0 00-.607-.607h-1.214a.607.607 0 00-.607.607v2.125a6.147 6.147 0 00-2.178.9L22.1 20.319a.607.607 0 00-.858 0l-.92.92a.607.607 0 000 .858l1.508 1.513a6.125 6.125 0 00-.9 2.179h-2.123a.607.607 0 00-.607.607v1.214a.607.607 0 00.607.607h2.125a6.125 6.125 0 00.9 2.179l-1.513 1.513a.607.607 0 000 .858l.92.92a.607.607 0 00.858 0l1.513-1.513a6.147 6.147 0 002.178.9V35.2a.607.607 0 00.607.607h1.214a.607.607 0 00.607-.607v-2.132a6.147 6.147 0 002.178-.9l1.513 1.513a.607.607 0 00.858 0l.92-.92a.607.607 0 000-.858l-1.515-1.511a6.125 6.125 0 00.9-2.179h2.13a.607.607 0 00.607-.607v-1.213a.607.607 0 00-.607-.607zM27 30.164A3.164 3.164 0 1130.164 27 3.165 3.165 0 0127 30.164z"}})])
          )
        }
      }
    