
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
            children.concat([_c('path',{attrs:{"d":"M18.477.593L22.8 12.029l12.212.578a.51.51 0 01.3.908l-9.54 7.646 3.224 11.793a.51.51 0 01-.772.561L18 26.805l-10.22 6.71a.51.51 0 01-.772-.561l3.224-11.793-9.54-7.646a.51.51 0 01.3-.908l12.208-.578L17.523.593a.51.51 0 01.954 0z"}})])
          )
        }
      }
    