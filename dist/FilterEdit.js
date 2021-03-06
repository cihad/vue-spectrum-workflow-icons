
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
            children.concat([_c('path',{attrs:{"d":"M35.785 21.721l-3.505-3.506a.739.739 0 00-.527-.215h-.023a.833.833 0 00-.564.247L20.344 29.069a.608.608 0 00-.153.256l-2.027 6c-.069.229.279.517.476.517a.313.313 0 00.037 0c.168-.039 5.123-1.764 6-2.028a.6.6 0 00.252-.151l10.824-10.829A.835.835 0 0036 22.3a.743.743 0 00-.215-.579zm-11.6 10.963c-1.314.395-3.3 1.229-4.43 1.568l1.56-4.431zM30.946 2H3.054a1 1 0 00-.787 1.617L14 18.589V30a.992.992 0 001.68.825l3.98-4.153a1.22 1.22 0 00.34-.845v-7.238L31.733 3.617A1 1 0 0030.946 2z"}})])
          )
        }
      }
    