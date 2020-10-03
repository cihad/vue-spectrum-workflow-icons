
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
            children.concat([_c('circle',{attrs:{"cx":"7.993","cy":"28.007","r":"4"}}),_c('path',{attrs:{"d":"M21.983 32.007h-4a.5.5 0 01-.5-.489 13.519 13.519 0 00-13-13 .5.5 0 01-.488-.5v-4a.5.5 0 01.511-.5A18.525 18.525 0 0122.486 31.5a.5.5 0 01-.503.507z"}}),_c('path',{attrs:{"d":"M31.985 32.007h-4a.5.5 0 01-.5-.493 23.7 23.7 0 00-23-23.19.5.5 0 01-.493-.5V4.015a.5.5 0 01.51-.5A28.535 28.535 0 0132.489 31.5a.5.5 0 01-.504.507z"}})])
          )
        }
      }
    