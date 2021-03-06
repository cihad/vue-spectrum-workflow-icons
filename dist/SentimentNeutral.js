
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm-5.635 8.534c1.656 0 3 1.679 3 3.75s-1.344 3.75-3 3.75-3-1.679-3-3.75 1.343-3.75 3-3.75zM23.2 26H12.8a.8.8 0 01-.8-.8v-.4a.8.8 0 01.8-.8h10.4a.8.8 0 01.8.8v.4a.8.8 0 01-.8.8zm.273-8.068c-1.657 0-3-1.679-3-3.75s1.343-3.75 3-3.75 3 1.679 3 3.75-1.343 3.75-3 3.75z"}})])
          )
        }
      }
    