
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
            children.concat([_c('path',{attrs:{"d":"M6.227 20.311H2A16.172 16.172 0 0015.688 34v-4.228a12.006 12.006 0 01-9.461-9.461zm9.461-14.083V2A16.172 16.172 0 002 15.688h4.228a12.005 12.005 0 019.46-9.46zm14.084 9.46H34A16.172 16.172 0 0020.312 2v4.228a12.005 12.005 0 019.46 9.46zM15.9 21.73a12.329 12.329 0 015.83-5.83 4.286 4.286 0 10-5.83 5.83zM27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    