
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
            children.concat([_c('path',{attrs:{"d":"M33 2H11a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1V6h16v24H14v-3a1 1 0 00-1-1h-2a1 1 0 00-1 1v6a1 1 0 001 1h22a1 1 0 001-1V3a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M16 25.2a.8.8 0 00.8.8.787.787 0 00.527-.2l7.524-7.445a.5.5 0 000-.7L17.332 10.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V16H3a1 1 0 00-1 1v2a1 1 0 001 1h13z"}})])
          )
        }
      }
    