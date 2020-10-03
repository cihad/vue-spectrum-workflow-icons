
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
            children.concat([_c('path',{attrs:{"d":"M1.994 22H4v11a.988.988 0 00.986 1h.993a1 1 0 001-1l.006-11h2.007a.5.5 0 00.5-.5.491.491 0 00-.148-.35l-3.535-4.037a.5.5 0 00-.633 0L1.64 21.146a.49.49 0 00-.147.35.5.5 0 00.501.504zM23 3.829L31.682 9 23 14.17 14.318 9zM23 1a1.2 1.2 0 00-.629.178l-11.99 7.141a.8.8 0 000 1.362l11.99 7.141a1.2 1.2 0 001.249.006l11.993-7.143a.8.8 0 00.007-1.366L23.629 1.178A1.194 1.194 0 0023 1z"}}),_c('path',{attrs:{"d":"M35.62 17.319L31.726 15 23 20l-8.726-5-3.893 2.319a.8.8 0 000 1.362l11.99 7.141a1.2 1.2 0 001.249.006l11.993-7.143a.8.8 0 00.007-1.366z"}}),_c('path',{attrs:{"d":"M31.726 24l-2.54 1.513L31.682 27 23 32.17 14.318 27l2.5-1.487L14.274 24l-3.893 2.319a.8.8 0 000 1.362l11.99 7.141a1.2 1.2 0 001.249.006l11.993-7.143a.8.8 0 00.007-1.366z"}})])
          )
        }
      }
    