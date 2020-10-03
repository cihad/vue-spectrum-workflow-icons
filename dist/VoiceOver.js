
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
            children.concat([_c('path',{attrs:{"d":"M23.8 7.2a6.8 6.8 0 00-13.6 0v13.6a6.8 6.8 0 1013.6 0z"}}),_c('path',{attrs:{"d":"M28 21v-4.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V21a9 9 0 11-18 0v-4.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V21c0 5.725 5.357 11 10 11v2H8.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H18v-2.058c4.643 0 10-5.216 10-10.942z"}})])
          )
        }
      }
    