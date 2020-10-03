
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
            children.concat([_c('path',{attrs:{"d":"M21.812 18.678a.5.5 0 00-.107.678l.574.823a.5.5 0 00.716.115 8 8 0 10-9.971.015.5.5 0 00.718-.117l.571-.824a.5.5 0 00-.109-.679 6 6 0 015.26-10.471 5.913 5.913 0 013.991 3.3 6.02 6.02 0 01-1.643 7.16z"}}),_c('path',{attrs:{"d":"M16.419 1.094a13 13 0 00-6.244 23.288.508.508 0 00.717-.122l.569-.821a.5.5 0 00-.116-.681 11 11 0 1113.337-.019.5.5 0 00-.115.68l.573.821a.506.506 0 00.715.119 13 13 0 00-9.436-23.265z"}}),_c('path',{attrs:{"d":"M19.4 17.2a3.5 3.5 0 10-2.809 0L11.75 33.356a.5.5 0 00.479.644h1.043a.5.5 0 00.479-.356L15.443 28h5.113l1.693 5.644a.5.5 0 00.479.356h1.043a.5.5 0 00.479-.644zM16 14a2 2 0 112 2 2 2 0 01-2-2zm.043 12L18 19.477 19.957 26z"}})])
          )
        }
      }
    