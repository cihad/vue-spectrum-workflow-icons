
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
            children.concat([_c('path',{attrs:{"d":"M13.5 18a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V20H8v10h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H6V20H2v1.473a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V18.5a.5.5 0 01.5-.5zm6.5.522a10.973 10.973 0 014-2.095V8h8v3a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1V8h8zm7-.422a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm4.9 10.4h-3.4v3.4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-3.4h-3.4a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h3.4v-3.4a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3.4h3.4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5z"}})])
          )
        }
      }
    