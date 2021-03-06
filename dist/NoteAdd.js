
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
            children.concat([_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}}),_c('path',{attrs:{"d":"M14.8 27a12.13 12.13 0 011.08-5H8.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h8.519a12.233 12.233 0 014.732-4H8.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v.687a12.142 12.142 0 014 1.83V3a1 1 0 00-1-1H3a1 1 0 00-1 1v24a1 1 0 001 1h9l3.536 6.839a.5.5 0 00.928 0l.483-.934A12.139 12.139 0 0114.8 27zM8 8.5a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5z"}})])
          )
        }
      }
    