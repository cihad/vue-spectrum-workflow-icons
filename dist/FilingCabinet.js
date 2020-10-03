
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
            children.concat([_c('path',{attrs:{"d":"M31 2H5a1 1 0 00-1 1v24a1 1 0 001 1h3v3a1 1 0 001 1h2a1 1 0 001-1v-3h12v3a1 1 0 001 1h2a1 1 0 001-1v-3h3a1 1 0 001-1V3a1 1 0 00-1-1zm-1 24H6V16h24zM6 14V4h24v10z"}}),_c('circle',{attrs:{"cx":"18","cy":"10","r":"2"}}),_c('circle',{attrs:{"cx":"18","cy":"20","r":"2"}})])
          )
        }
      }
    