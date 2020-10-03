
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
            children.concat([_c('path',{attrs:{"d":"M16 27a11.013 11.013 0 015.761-9.67 13.413 13.413 0 001.727-6.288C23.488 5.617 20.4 2 15.956 2s-7.532 3.617-7.532 9.042c0 5.015 3.532 8.958 3.532 8.958 0 1.652-.026 2.977-1.673 3.12C8.031 23.316.666 25.763 0 32.947A.993.993 0 001 34h17.522A10.944 10.944 0 0116 27z"}}),_c('path',{attrs:{"d":"M27 18a9 9 0 109 9 9 9 0 00-9-9zm4.9 10.5h-3.4v3.4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-3.4h-3.4a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h3.4v-3.4a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3.4h3.4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5z"}})])
          )
        }
      }
    