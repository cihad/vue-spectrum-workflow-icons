
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
            children.concat([_c('path',{attrs:{"d":"M12 17v2a1 1 0 001 1h6.7l3.8-3.8c.074-.074.163-.127.24-.2H13a1 1 0 00-1 1zM33 4H13a1 1 0 00-1 1v2a1 1 0 001 1h20a1 1 0 001-1V5a1 1 0 00-1-1zM7.2 26h-.4A2.8 2.8 0 004 28.8v.4A2.8 2.8 0 006.8 32h.4a2.8 2.8 0 002.8-2.8v-.4A2.8 2.8 0 007.2 26zm0-12h-.4A2.8 2.8 0 004 16.8v.4A2.8 2.8 0 006.8 20h.4a2.8 2.8 0 002.8-2.8v-.4A2.8 2.8 0 007.2 14zM13 28a1 1 0 00-1 1v2a1 1 0 001 1h4.844a9.442 9.442 0 01-1.279-4zM7.2 2h-.4A2.8 2.8 0 004 4.8v.4A2.8 2.8 0 006.8 8h.4A2.8 2.8 0 0010 5.2v-.4A2.8 2.8 0 007.2 2zM36 28.071l-4.7 4.7a7 7 0 01-9.9-9.9l5.407-5.407a5 5 0 017.071 7.071l-5.407 5.407a3 3 0 01-4.242-4.242l4.7-4.7 1.414 1.414-4.7 4.7a1 1 0 001.414 1.414l5.407-5.407a3 3 0 00-4.243-4.243l-5.407 5.407a5 5 0 007.071 7.071l4.7-4.7z"}})])
          )
        }
      }
    