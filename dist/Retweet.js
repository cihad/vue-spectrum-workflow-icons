
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
            children.concat([_c('path',{attrs:{"d":"M12 24V14h2a.5.5 0 00.4-.8L9 6l-5.4 7.2a.5.5 0 00.4.8h2v10a6 6 0 006 6h12l-4.759-6zm20-2h-2V12a6 6 0 00-6-6H12l4.735 6H24v10h-2a.5.5 0 00-.4.8L27 30l5.4-7.2a.5.5 0 00-.4-.8z"}})])
          )
        }
      }
    