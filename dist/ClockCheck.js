
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
            children.concat([_c('path',{attrs:{"d":"M14 16.086V7a1 1 0 011-1h2a1 1 0 011 1v10.586a1 1 0 01-.293.707L12.1 23.9a1 1 0 01-1.414 0L9.35 22.565a1 1 0 010-1.414l4.358-4.358a1 1 0 00.292-.707z"}}),_c('path',{attrs:{"d":"M15.763 31.988A14 14 0 1129.669 15a12.185 12.185 0 012.143.68A15.992 15.992 0 1016 34c.29 0 .573-.028.86-.044a12.309 12.309 0 01-1.097-1.968z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.127a.5.5 0 010-.707l1.036-1.036a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.702-.005z"}})])
          )
        }
      }
    