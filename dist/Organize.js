
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
            children.concat([_c('path',{attrs:{"d":"M14 8H2V5a1 1 0 011-1h6.586a1 1 0 01.707.293zm19 2H2v21a1 1 0 001 1h30a1 1 0 001-1V11a1 1 0 00-1-1zm-21 4.5a.5.5 0 01.5-.5h14a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5zM8.5 27.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75zm0-6a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75zm0-6a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75zM25 27.5a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h12a.5.5 0 01.5.5zm6-6a.5.5 0 01-.5.5h-18a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h18a.5.5 0 01.5.5z"}})])
          )
        }
      }
    