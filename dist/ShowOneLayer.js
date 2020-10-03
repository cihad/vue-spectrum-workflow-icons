
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
            children.concat([_c('path',{attrs:{"d":"M33.113 17.905L25.68 14.12l7.433-3.769c.241-.123.241-.323 0-.446l-14.688-7.48a.98.98 0 00-.85 0L2.887 9.9c-.241.123-.241.323 0 .446l7.407 3.782-7.407 3.777c-.241.123-.241.323 0 .446l7.4 3.767-7.4 3.787c-.241.123-.241.323 0 .446l14.688 7.479a.971.971 0 00.85 0l14.688-7.479c.241-.123.241-.323 0-.446l-7.43-3.771 7.43-3.783c.241-.123.241-.323 0-.446zM6.857 10.128L18 4.453l11.144 5.675L23.477 13l-5.052-2.572a.936.936 0 00-.85 0L12.5 13.011zm22.287 16L18 31.8 6.857 26.128l5.632-2.887 5.086 2.589a.936.936 0 00.85 0l5.054-2.574z"}})])
          )
        }
      }
    