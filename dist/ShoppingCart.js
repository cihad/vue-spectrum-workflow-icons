
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
            children.concat([_c('ellipse',{attrs:{"cx":"10.445","cy":"31.143","rx":"2.667","ry":"2.917"}}),_c('ellipse',{attrs:{"cx":"25.778","cy":"31.143","rx":"2.667","ry":"2.917"}}),_c('path',{attrs:{"d":"M29.326 24H10.469l.762-2.6H28a1.331 1.331 0 001.307-1.071L33.974 7.66a1.334 1.334 0 00-1.308-1.595h-.126v-.03H6.5l-1.289-3.5A1.335 1.335 0 003.889 1.4H1.333a1.334 1.334 0 000 2.667h1.406L8.667 20l-1.294 5.075A1.569 1.569 0 008.667 27h20.666a1.589 1.589 0 001.334-1.6 1.4 1.4 0 00-1.341-1.4zM7.529 8.835H30.6l-3.693 9.9H11.174z"}})])
          )
        }
      }
    