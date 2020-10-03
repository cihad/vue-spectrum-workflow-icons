
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm4.295 15.992a.56.56 0 01-.568.408h-1.973a.546.546 0 01-.539-.325l-.436-1.83a694.87 694.87 0 01-1.355-5.912c-.449 1.891-1.137 4.492-1.639 6.391l-.32 1.214a.559.559 0 01-.57.463h-1.934a.606.606 0 01-.545-.34L10.27 18.048l.146-.274.121-.143.279-.031h2.066a.527.527 0 01.578.474c.894 3.754 1.389 5.919 1.676 7.29.092-.38.2-.817.322-1.325.334-1.372.8-3.267 1.437-5.983a.55.55 0 01.57-.455h2.117a.535.535 0 01.527.425l.232.977a385.655 385.655 0 011.463 6.351c.309-1.521.8-3.821 1.57-7.292a.56.56 0 01.572-.46h2.1l.23.178a.543.543 0 01.109.45z"}})])
          )
        }
      }
    