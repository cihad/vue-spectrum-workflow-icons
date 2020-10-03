
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
            children.concat([_c('path',{attrs:{"d":"M19.237 26.8l9.084 5.063a.819.819 0 001.1-.366l6.485-16.146zm-3.154.963V35.2a.5.5 0 00.824.381l5.32-4.525zM7.662 24H4V4h28v7.8l1.96-.611H34V3a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h8.667z"}}),_c('path',{attrs:{"d":"M34.791 13.535L9.078 21.444a.409.409 0 00-.066.759l7.114 3.479z"}})])
          )
        }
      }
    