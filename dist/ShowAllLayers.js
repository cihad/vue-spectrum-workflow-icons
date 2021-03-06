
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
            children.concat([_c('path',{attrs:{"d":"M17.575 17.83L2.887 10.351c-.241-.123-.241-.323 0-.446l14.688-7.48a.943.943 0 01.85 0L33.113 9.9c.241.123.241.323 0 .446L18.425 17.83a.936.936 0 01-.85 0zm15.539 8.075l-4.6-2.341L18 28.918 7.484 23.564l-4.6 2.341c-.241.123-.241.323 0 .446l14.691 7.479a.936.936 0 00.85 0l14.689-7.479c.24-.123.24-.323 0-.446z"}}),_c('path',{attrs:{"d":"M33.114 17.905l-4.6-2.341L18 20.918 7.484 15.564l-4.6 2.341c-.241.123-.241.323 0 .446l14.691 7.479a.936.936 0 00.85 0l14.689-7.479c.24-.123.24-.323 0-.446z"}})])
          )
        }
      }
    