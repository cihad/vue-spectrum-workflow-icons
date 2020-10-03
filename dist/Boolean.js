
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
            children.concat([_c('path',{attrs:{"d":"M24 8.5a9.5 9.5 0 010 19H12a9.5 9.5 0 010-19zM24 6H12a12 12 0 000 24h12a12 12 0 000-24zm0 6a6 6 0 11-6 6 6.007 6.007 0 016-6z"}})])
          )
        }
      }
    