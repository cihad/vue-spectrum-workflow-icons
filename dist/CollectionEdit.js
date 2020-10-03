
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
            children.concat([_c('path',{attrs:{"d":"M18.9 28.046c.006-.016.016-.03.022-.046H14V18h8v6.582l2-2V18h4.582l1.118-1.123a2.856 2.856 0 011.978-.833h.023a2.724 2.724 0 011.941.8L34 17.2V5a1 1 0 00-1-1H3a1 1 0 00-1 1v24a1 1 0 001 1h15.115zM24 6h8v10h-8zM14 6h8v10h-8zm-2 22H4V18h8zm0-12H4V6h8z"}}),_c('path',{attrs:{"d":"M35.738 21.764l-3.506-3.506a.738.738 0 00-.527-.215h-.023a.833.833 0 00-.564.247L20.929 28.48a.607.607 0 00-.153.256l-2.66 6.63c-.069.229.279.517.476.517a.313.313 0 00.037 0c.168-.039 5.756-2.4 6.634-2.661a.6.6 0 00.252-.151l10.19-10.19a.836.836 0 00.246-.537.743.743 0 00-.213-.58zm-10.97 10.33c-1.314.4-3.928 1.862-5.063 2.2l2.195-5.062z"}})])
          )
        }
      }
    