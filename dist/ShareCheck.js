
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
            children.concat([_c('path',{attrs:{"d":"M17.722 6.332L12 0 6.292 6.332A1 1 0 007.035 8H10v9.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V8h2.979a1 1 0 00.743-1.668zM27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.127a.5.5 0 010-.707l1.036-1.036a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.702-.005z"}}),_c('path',{attrs:{"d":"M14.7 27a12.272 12.272 0 01.384-3H4V14h2v-4H1a1 1 0 00-1 1v16a1 1 0 001 1h13.75c-.026-.33-.05-.662-.05-1zM20 16.893a12.226 12.226 0 014-1.809V11a1 1 0 00-1-1h-5v4h2z"}})])
          )
        }
      }
    