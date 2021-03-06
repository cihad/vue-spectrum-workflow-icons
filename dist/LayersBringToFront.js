
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
            children.concat([_c('path',{attrs:{"d":"M2 8h2.007v25a.988.988 0 00.987 1h.992a1 1 0 001-1l.007-25H9a.5.5 0 00.5-.5.49.49 0 00-.147-.35L5.816 3.113a.5.5 0 00-.632 0L1.647 7.146A.49.49 0 001.5 7.5.5.5 0 002 8zm21-7a1.2 1.2 0 00-.629.178l-11.99 7.141a.8.8 0 000 1.362l11.99 7.141a1.2 1.2 0 001.249.006l11.993-7.143a.8.8 0 00.007-1.366L23.629 1.178A1.194 1.194 0 0023 1zm8.726 23l-2.54 1.513L31.682 27 23 32.17 14.318 27l2.5-1.487L14.274 24l-3.893 2.319a.8.8 0 000 1.362l11.99 7.141a1.2 1.2 0 001.249.006l11.993-7.143a.8.8 0 00.007-1.366z"}}),_c('path',{attrs:{"d":"M31.726 15l-2.54 1.513L31.682 18 23 23.17 14.318 18l2.5-1.487L14.274 15l-3.893 2.319a.8.8 0 000 1.362l11.99 7.141a1.2 1.2 0 001.249.006l11.993-7.143a.8.8 0 00.007-1.366z"}})])
          )
        }
      }
    