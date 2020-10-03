
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
            children.concat([_c('path',{attrs:{"d":"M18.861 4.763a.867.867 0 00-1.722 0l-2.31 19.116A3.219 3.219 0 0018 27.649a3.219 3.219 0 003.171-3.77zm15.104 13.991A16.163 16.163 0 0021.816 4.292c.006.037.019.071.023.109l.377 3.116A13.022 13.022 0 0131 19.813a12.878 12.878 0 01-.691 4.117.492.492 0 00.116.506L31.987 26a.5.5 0 00.818-.154 15.842 15.842 0 001.16-7.092zM2 19.813a13.828 13.828 0 001.394 5.867.5.5 0 00.806.133l1.375-1.376a.491.491 0 00.116-.508 12.465 12.465 0 01-.313-7.12 13.334 13.334 0 018.4-9.227L14.16 4.4c0-.039.019-.074.024-.113A15.993 15.993 0 002 19.813z"}})])
          )
        }
      }
    