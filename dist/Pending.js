
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
            children.concat([_c('path',{attrs:{"d":"M20 16.086V7a1 1 0 00-1-1h-2a1 1 0 00-1 1v10.586a1 1 0 00.293.707L21.9 23.9a1 1 0 001.415 0l1.335-1.335a1 1 0 000-1.415l-4.357-4.357a1 1 0 01-.293-.707zM26.485 6.9a14.163 14.163 0 012.626 2.6l1.743-1a16.173 16.173 0 00-3.365-3.336zm7.408 9.3a15.964 15.964 0 00-1.227-4.589l-1.742 1.006a13.976 13.976 0 01.947 3.583zM24.376 3.357A15.986 15.986 0 0019.8 2.111v2.023a14.114 14.114 0 013.572.962z"}}),_c('path',{attrs:{"d":"M31.872 19.8A13.994 13.994 0 1116.2 4.128V2.107A16 16 0 1033.892 19.8z"}})])
          )
        }
      }
    