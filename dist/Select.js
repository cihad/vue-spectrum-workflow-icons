
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
            children.concat([_c('path',{attrs:{"d":"M8.5 2.054a.5.5 0 00-.5.5v32.78a.5.5 0 00.5.5.49.49 0 00.35-.147L18.524 26h13a.5.5 0 00.354-.854L8.854 2.2a.49.49 0 00-.354-.146z"}})])
          )
        }
      }
    