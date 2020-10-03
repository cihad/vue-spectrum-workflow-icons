
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2zm6.157 27.272c1.1 1.641 2.773 4.159 1.887 6.418a3.075 3.075 0 01-.463-.073c-2.484-.527-6-2.931-6-6.966a7.117 7.117 0 012.893-5.706c.118 1.433-1.078 2.155-.615 3.831.541 1.974 1.379 1.129 2.298 2.496zm9.052-.166c-.713-.271-1.325.653-1.379-1.844a2.552 2.552 0 01.738-1.771 1.361 1.361 0 01.323-.154c-.084-.155-.179-.3-.274-.451-.017.009-.031.02-.048.027-.554.258-.63.334-.886 0a.7.7 0 01.153-1.03 7.078 7.078 0 00-5.16-2.312c.9.012 1.969.677 1.423 1.74.082-.169-1.783-.571-2.037-.571-.342 0 .7-1.279.6-1.168a7.121 7.121 0 00-2.929.63c.484.313 1.023.2 1.569.338a1.328 1.328 0 01.486.2 1.636 1.636 0 00-.486-.2c-.8-.093.39 2.115.344 1.821a1.02 1.02 0 012.024-.061 1.655 1.655 0 01-.371 1c-.624.821-.751 2.282-1.063 1.908-2.918-1.2-2.6.386-1.639 1.442 1.534 1.691.755.173 2.764 1.059 1.615.712 3.559.881 3.085 1.418-1.435 1.625-1.133 2.7-3.672 4.607.211-.006.885-.073 1.023-.1a7.206 7.206 0 005.922-6.376 1.061 1.061 0 01-.51-.152z"}}),_c('path',{attrs:{"d":"M18.591 28.643A10.062 10.062 0 0130 18.673V14H19a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h13.135a10.015 10.015 0 01-1.544-5.357z"}})])
          )
        }
      }
    