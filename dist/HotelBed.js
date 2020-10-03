
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M35.2 22H.8L6 14h24zM0 24v5a1 1 0 001 1h3v1.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V30h24v1.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V30h3a1 1 0 001-1v-5zm8-13a1 1 0 011-1h6a1 1 0 011 1v1h4v-1a1 1 0 011-1h6a1 1 0 011 1v1h2V7a1 1 0 00-1-1H7a1 1 0 00-1 1v5h2z"}})])
          )
        }
      }
    