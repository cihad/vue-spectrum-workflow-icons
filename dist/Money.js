
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
            children.concat([_c('circle',{attrs:{"cx":"22","cy":"14","r":"4"}}),_c('path',{attrs:{"d":"M8 21V7a1 1 0 011-1h26a1 1 0 011 1v14a1 1 0 01-1 1H9a1 1 0 01-1-1zm26-9.343A6.016 6.016 0 0130.343 8H13.657A6.015 6.015 0 0110 11.657v4.686A6.016 6.016 0 0113.657 20h16.686A6.015 6.015 0 0134 16.343z"}}),_c('path',{attrs:{"d":"M33 26H5a1 1 0 01-1-1V9a1 1 0 011-1h1v16h28v1a1 1 0 01-1 1z"}}),_c('path',{attrs:{"d":"M29 30H1a1 1 0 01-1-1V13a1 1 0 011-1h1v16h28v1a1 1 0 01-1 1z"}})])
          )
        }
      }
    