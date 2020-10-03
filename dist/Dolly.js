
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
            children.concat([_c('path',{attrs:{"d":"M30.841 24H24L20.364 8h5.584a.375.375 0 00.237-.666L18 .65 9.815 7.334a.375.375 0 00.237.666h5.584L12 24H5.159a.75.75 0 00-.465 1.338L18 35.85l13.306-10.512A.75.75 0 0030.841 24z"}})])
          )
        }
      }
    