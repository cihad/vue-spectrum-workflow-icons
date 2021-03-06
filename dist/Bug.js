
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
            children.concat([_c('path',{attrs:{"d":"M26.194 7.242A9.8 9.8 0 0018 3a9.8 9.8 0 00-8.194 4.242A11.943 11.943 0 0018 10.5a11.943 11.943 0 008.194-3.258zm-20.978-.85L2.548 7.726a18.1 18.1 0 004.581 5.114A27.459 27.459 0 006.118 18H0v3h6.045a13.6 13.6 0 002.5 6.363 15.078 15.078 0 00-4.5 6.16l2.7 1.35a12.052 12.052 0 013.774-5.2 11.571 11.571 0 005.981 3.185V13.5A14.982 14.982 0 015.216 6.392zM36 21v-3h-6.118a27.459 27.459 0 00-1.011-5.16 18.1 18.1 0 004.581-5.114l-2.668-1.334A14.982 14.982 0 0119.5 13.5v19.358a11.571 11.571 0 005.979-3.185 12.052 12.052 0 013.774 5.2l2.7-1.35a15.078 15.078 0 00-4.5-6.16A13.6 13.6 0 0029.955 21z"}})])
          )
        }
      }
    