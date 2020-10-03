
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
            children.concat([_c('path',{attrs:{"d":"M16 30H8V6h16v9.347a11.6 11.6 0 012-.416V2a2 2 0 00-2-2H8a2 2 0 00-2 2v32a2 2 0 002 2h8zM15 2h2a1.04 1.04 0 011 1 1.041 1.041 0 01-1 1h-2a1.024 1.024 0 01-1-1 1.024 1.024 0 011-1z"}}),_c('path',{attrs:{"d":"M18.4 24.451a8.882 8.882 0 0115.5-3.09l1.251-1.251a.486.486 0 01.349-.147.5.5 0 01.5.5v5.051a.472.472 0 01-.179.334l.014.114H30.5a.5.5 0 01-.5-.5.486.486 0 01.148-.35l1.739-1.74a6.057 6.057 0 00-10.6 1.436.975.975 0 01-.921.62h-1.248a.76.76 0 01-.718-.977zm17.2 5.06A8.882 8.882 0 0120.1 32.6l-1.25 1.251a.489.489 0 01-.35.149.5.5 0 01-.5-.5v-5.053a.477.477 0 01.179-.334c0-.037-.01-.075-.014-.113H23.5a.5.5 0 01.5.5.489.489 0 01-.147.35l-1.74 1.739a6.056 6.056 0 0010.6-1.436.976.976 0 01.921-.619h1.251a.759.759 0 01.715.977z"}})])
          )
        }
      }
    