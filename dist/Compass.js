
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
            children.concat([_c('path',{attrs:{"d":"M1.5 19.5H3a1.455 1.455 0 00.149-.03A14.824 14.824 0 004.835 25L6.7 22.237A12.049 12.049 0 0122.182 6.684l2.775-1.873a14.818 14.818 0 00-5.487-1.662A1.455 1.455 0 0019.5 3V1.5a1.5 1.5 0 00-3 0V3a1.455 1.455 0 00.03.149A14.927 14.927 0 003.149 16.53 1.455 1.455 0 003 16.5H1.5a1.5 1.5 0 000 3zm33-3H33a1.455 1.455 0 00-.149.03 14.828 14.828 0 00-1.662-5.488l-1.873 2.775A12.049 12.049 0 0113.764 29.3L11 31.165a14.824 14.824 0 005.534 1.686A1.455 1.455 0 0016.5 33v1.5a1.5 1.5 0 003 0V33a1.455 1.455 0 00-.03-.149A14.927 14.927 0 0032.851 19.47a1.455 1.455 0 00.149.03h1.5a1.5 1.5 0 000-3zm-19.793-.755L3.173 32.827l17.082-11.534a4.516 4.516 0 001.211-1.211L33 3 15.918 14.534a4.516 4.516 0 00-1.211 1.211zm3.3 4.973a2.726 2.726 0 112.726-2.726 2.727 2.727 0 01-2.725 2.726z"}})])
          )
        }
      }
    