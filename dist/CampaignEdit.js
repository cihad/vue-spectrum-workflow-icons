
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
            children.concat([_c('circle',{attrs:{"cx":"16","cy":"18","r":"4.3"}}),_c('path',{attrs:{"d":"M4.227 20.311H0A16.172 16.172 0 0013.688 34v-4.228a12.006 12.006 0 01-9.461-9.461zm9.461-14.083V2A16.172 16.172 0 000 15.688h4.228a12.005 12.005 0 019.46-9.46zm14.084 9.46H32A16.172 16.172 0 0018.312 2v4.228a12.005 12.005 0 019.46 9.46zm7.966 6.076l-3.506-3.506a.738.738 0 00-.527-.215h-.023a.833.833 0 00-.564.247L20.929 28.48a.607.607 0 00-.153.256l-2.66 6.63c-.069.229.279.517.476.517a.313.313 0 00.037 0c.168-.039 5.756-2.4 6.634-2.661a.6.6 0 00.252-.151l10.19-10.19a.836.836 0 00.246-.537.743.743 0 00-.213-.58zm-10.97 10.33c-1.314.4-3.928 1.862-5.063 2.2l2.195-5.062z"}})])
          )
        }
      }
    