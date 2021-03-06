
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
            children.concat([_c('path',{attrs:{"d":"M21.285 4.2l-5.563-3.017a1.515 1.515 0 00-1.443 0L.409 8.7a.781.781 0 000 1.373L5.645 12.9zm8.306 4.5l-5.149-2.794L8.8 14.615l6.2 3.357 14.591-7.9a.781.781 0 000-1.372zM14 20.971L0 13.193v13.459a1.6 1.6 0 00.823 1.4L14 35.371zM28 24v-3.328a.5.5 0 01.866-.341L36 28l-7.134 7.669a.5.5 0 01-.866-.341V32h-5a1 1 0 01-1-1v-6a1 1 0 011-1z"}}),_c('path',{attrs:{"d":"M27 18h3v-4.807l-14 7.778v14.4l4-2.222V23a1 1 0 011-1h5v-3a1 1 0 011-1z"}})])
          )
        }
      }
    