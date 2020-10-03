
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
            children.concat([_c('path',{attrs:{"d":"M33.567 8.2L27.8 2.432a1.215 1.215 0 00-.866-.353H26.9a1.371 1.371 0 00-.927.406L5.084 23.372a.99.99 0 00-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 00.062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 00.414-.249l20.888-20.889a1.372 1.372 0 00.4-.883 1.221 1.221 0 00-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"}})])
          )
        }
      }
    