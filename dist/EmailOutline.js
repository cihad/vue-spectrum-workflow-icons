
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
            children.concat([_c('path',{attrs:{"d":"M35 4H1a1 1 0 00-1 1v26a1 1 0 001 1h34a1 1 0 001-1V5a1 1 0 00-1-1zm-1 2v1.506L18 19.741 2 7.506V6zm0 4.023v15.9l-10.4-7.95zm-21.6 7.95L2 25.923v-15.9zM2 30v-1.56l12.042-9.208 2.743 2.1a2 2 0 002.43 0l2.743-2.1L34 28.44V30z"}})])
          )
        }
      }
    