
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
            children.concat([_c('path',{attrs:{"d":"M13.074 6H6V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v35a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V30h7.074a.926.926 0 00.926-.926V6.926A.927.927 0 0013.074 6zM31 10h-7V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v35a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V26h7a1 1 0 001-1V11a1 1 0 00-1-1z"}})])
          )
        }
      }
    