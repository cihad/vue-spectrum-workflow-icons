
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
            children.concat([_c('path',{attrs:{"d":"M14 23.828A3 3 0 0112 21v-2a3 3 0 013-3h19v-5a1 1 0 00-1-1H2v21a1 1 0 001 1h11z"}}),_c('path',{attrs:{"d":"M35 22H15a1 1 0 01-1-1v-2a1 1 0 011-1h20a1 1 0 011 1v2a1 1 0 01-1 1zm-1 2v11a1 1 0 01-1 1H17a1 1 0 01-1-1V24zm-6 6v-1a1 1 0 00-1-1h-4a1 1 0 00-1 1v1a1 1 0 001 1h4a1 1 0 001-1zM16 6H2V3.5A1.5 1.5 0 013.5 2h7.672a2 2 0 011.414.586z"}})])
          )
        }
      }
    