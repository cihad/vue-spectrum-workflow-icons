
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm7 15.5a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h15a.5.5 0 01.5.5zm0-4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h15a.5.5 0 01.5.5zm0-4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z"}})])
          )
        }
      }
    