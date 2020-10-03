
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M30 0H6a4 4 0 00-4 4v20a4 4 0 004 4h3.976L6.51 36h2.647l.867-2h15.952l.867 2h2.647l-3.466-8H30a4 4 0 004-4V4a4 4 0 00-4-4zM8 25a3 3 0 113-3 3 3 0 01-3 3zm2.89 7l1.734-4h10.752l1.734 4zM7 16a1 1 0 01-1-1V4h24v11a1 1 0 01-1 1zm21 9a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    