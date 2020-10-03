
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
            children.concat([_c('path',{attrs:{"d":"M33.191 5.113L1.8 14.478a.5.5 0 00-.081.927l7.921 3.953zM13.089 21.032l11.937 6a1 1 0 001.343-.446l9.267-20.222zM10.08 23.25v7.639a.713.713 0 001.174.544l5.36-4.516z"}})])
          )
        }
      }
    