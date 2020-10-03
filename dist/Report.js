
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
            children.concat([_c('path',{attrs:{"d":"M27 4H9a1 1 0 00-1 1v26a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-11 6.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5zm-6 4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5zm12 15a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zm4-6a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"}})])
          )
        }
      }
    