
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
            children.concat([_c('path',{attrs:{"d":"M14.7 27A12.293 12.293 0 0134 16.893V9a1 1 0 00-1-1H2v21a1 1 0 001 1h12.084a12.251 12.251 0 01-.384-3z"}}),_c('path',{attrs:{"d":"M35.193 25.786h-2.125a6.142 6.142 0 00-.9-2.179l1.513-1.513a.607.607 0 000-.858l-.92-.92a.607.607 0 00-.858 0l-1.511 1.514a6.145 6.145 0 00-2.178-.9v-2.123a.607.607 0 00-.607-.607h-1.214a.607.607 0 00-.607.607v2.125a6.145 6.145 0 00-2.178.9l-1.513-1.513a.607.607 0 00-.858 0l-.92.92a.607.607 0 000 .858l1.513 1.513a6.142 6.142 0 00-.9 2.179h-2.123a.607.607 0 00-.607.607v1.214a.607.607 0 00.607.607h2.125a6.142 6.142 0 00.9 2.179l-1.513 1.513a.607.607 0 000 .858l.92.92a.607.607 0 00.858 0l1.513-1.513a6.145 6.145 0 002.178.9v2.125a.607.607 0 00.607.607h1.214a.607.607 0 00.607-.607v-2.131a6.145 6.145 0 002.178-.9l1.513 1.513a.607.607 0 00.858 0l.92-.92a.607.607 0 000-.858l-1.515-1.511a6.142 6.142 0 00.9-2.179h2.125a.607.607 0 00.607-.607v-1.213a.607.607 0 00-.609-.607zM27 30.164A3.164 3.164 0 1130.164 27 3.164 3.164 0 0127 30.164zM16 6H2V3.5A1.5 1.5 0 013.5 2h7.672a2 2 0 011.414.586z"}})])
          )
        }
      }
    