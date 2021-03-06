
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
            children.concat([_c('path',{attrs:{"d":"M2 8h26v2.71l2 2.213V3a1 1 0 00-1-1H1a1 1 0 00-1 1v22a1 1 0 001 1h2.154A8.266 8.266 0 015.4 24H2z"}}),_c('path',{attrs:{"d":"M31.722 18.331L26 12l-5.708 6.331A1 1 0 0021.035 20H24v7.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V20h2.979a1 1 0 00.743-1.669zM4 32l10-.008V22a2 2 0 012-2h2.233a2.988 2.988 0 01.574-3.008l1.217-1.35c-.174-3.5-2.132-5.463-5.054-5.463-3.062 0-5.147 2.219-5.147 5.956a8.179 8.179 0 001.928 5.049 1.061 1.061 0 01.27.684v1.525a1.053 1.053 0 01-.918 1.062c-6.152.535-7.085 4.879-7.085 6.538z"}}),_c('path',{attrs:{"d":"M32 22v10H20V22h-3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V23a1 1 0 00-1-1z"}})])
          )
        }
      }
    