
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
            children.concat([_c('path',{attrs:{"d":"M6 22.926V30H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h35a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H30v-7.074a.927.927 0 00-.926-.926H6.926a.926.926 0 00-.926.926zM10 5v7H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h35a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H26V5a1 1 0 00-1-1H11a1 1 0 00-1 1z"}})])
          )
        }
      }
    