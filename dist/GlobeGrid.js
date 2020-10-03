
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
            children.concat([_c('path',{attrs:{"d":"M17 0a17 17 0 1017 17A17 17 0 0017 0zm13.749 16h-5.571a27.12 27.12 0 00-.853-6h4.547a13.676 13.676 0 011.877 6zm-3.311-8H23.7a14.681 14.681 0 00-2.2-4.04A13.864 13.864 0 0127.438 8zM16 18v6h-4.268a24.81 24.81 0 01-.911-6zm-5.179-2a24.81 24.81 0 01.911-6H16v6zM18 18h5.179a24.81 24.81 0 01-.911 6H18zm0-2v-6h4.268a24.81 24.81 0 01.911 6zm3.568-8H18V3.619C19.307 4.158 20.6 5.7 21.568 8zM16 3.619V8h-3.568C13.4 5.7 14.693 4.158 16 3.619zm-3.5.341A14.681 14.681 0 0010.305 8H6.562A13.864 13.864 0 0112.5 3.96zM5.128 10h4.547a27.12 27.12 0 00-.853 6H3.251a13.676 13.676 0 011.877-6zm-1.877 8h5.571a27.12 27.12 0 00.853 6H5.128a13.676 13.676 0 01-1.877-6zm3.311 8h3.743a14.681 14.681 0 002.195 4.04A13.864 13.864 0 016.562 26zm5.87 0H16v4.381c-1.307-.539-2.6-2.081-3.568-4.381zM18 30.381V26h3.568c-.968 2.3-2.261 3.842-3.568 4.381zm3.5-.341A14.681 14.681 0 0023.7 26h3.743a13.864 13.864 0 01-5.943 4.04zM28.872 24h-4.547a27.12 27.12 0 00.853-6h5.571a13.676 13.676 0 01-1.877 6z"}})])
          )
        }
      }
    