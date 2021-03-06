
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
            children.concat([_c('path',{attrs:{"d":"M25 26h-2a1 1 0 00-1 1v3H6V6h16v3a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1v-6a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M35.856 17.649L29.332 10.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V16H17a1 1 0 00-1 1v2a1 1 0 001 1h11v5.2a.8.8 0 00.8.8.787.787 0 00.527-.2l6.524-7.445a.5.5 0 000-.7z"}})])
          )
        }
      }
    