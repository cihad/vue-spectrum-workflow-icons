
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
            children.concat([_c('path',{attrs:{"d":"M18.807 17.242l.2-.227v-.766a1.441 1.441 0 01.367-.93 11 11 0 002.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.121 11.121 0 002.622 6.866 1.443 1.443 0 01.367.93v2.074A1.431 1.431 0 019.7 19.767C1.338 20.5.031 26.217.031 28.474c0 .251.048 1.484.048 1.484H14V22a2 2 0 012-2h1.97s-.118-1.93.837-2.758zm12.915 1.089L26 12l-5.708 6.331A1 1 0 0021.035 20H24v7.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V20h2.979a1 1 0 00.743-1.669z"}}),_c('path',{attrs:{"d":"M32 22v10H20V22h-3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V23a1 1 0 00-1-1z"}})])
          )
        }
      }
    