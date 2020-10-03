
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm-5.635 6.534c1.656 0 3 1.679 3 3.75s-1.344 3.75-3 3.75-3-1.679-3-3.75 1.343-3.75 3-3.75zm11.108-.1c1.657 0 3 1.679 3 3.75s-1.343 3.75-3 3.75-3-1.679-3-3.75 1.343-3.752 3-3.752zM18 28.04c-5.033 0-9.556-3.633-10-8.14h20c-.444 4.507-4.967 8.14-10 8.14z"}})])
          )
        }
      }
    