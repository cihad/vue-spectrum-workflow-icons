
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2h-4v15.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V2H7a1 1 0 00-1 1v30a1 1 0 001 1h5v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V34h15a1 1 0 001-1V14zm-1 13a1 1 0 01-1 1H9a1 1 0 01-1-1V17a1 1 0 011-1h1v4h6v-4h1a1 1 0 011 1z"}}),_c('circle',{attrs:{"cx":"13","cy":"24","r":"2.186"}})])
          )
        }
      }
    