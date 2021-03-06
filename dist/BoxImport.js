
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
            children.concat([_c('path',{attrs:{"d":"M27.285 4.2l-5.563-3.017a1.515 1.515 0 00-1.443 0L6.409 8.7a.781.781 0 000 1.373l5.236 2.827zm8.306 4.5l-5.149-2.794L14.8 14.615l6.2 3.357 14.591-7.9a.781.781 0 000-1.372zM22 20.971v14.4l13.177-7.32a1.6 1.6 0 00.823-1.4V13.193zM6 13.193v2.664L17.646 27.5a.5.5 0 010 .707l-3.762 3.762L20 35.371v-14.4z"}}),_c('path',{attrs:{"d":"M6 24v-3.328a.5.5 0 01.866-.341L14 28l-7.134 7.669A.5.5 0 016 35.328V32H1a1 1 0 01-1-1v-6a1 1 0 011-1z"}})])
          )
        }
      }
    