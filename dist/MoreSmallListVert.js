
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
            children.concat([_c('circle',{attrs:{"cx":"18","cy":"27","r":"2.85"}}),_c('circle',{attrs:{"cx":"18","cy":"18","r":"2.85"}}),_c('circle',{attrs:{"cx":"18","cy":"9","r":"2.85"}})])
          )
        }
      }
    