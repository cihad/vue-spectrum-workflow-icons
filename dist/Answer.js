
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
            children.concat([_c('path',{attrs:{"d":"M33 2H3a1 1 0 00-1 1v24a1 1 0 001 1h11l3.536 6.839a.5.5 0 00.928 0L22 28h11a1 1 0 001-1V3a1 1 0 00-1-1zM15.534 5.575a.306.306 0 01.189-.336A7.962 7.962 0 0118 4.873a9.1 9.1 0 012.311.274.366.366 0 01.227.336v2.2c0 2.567-.643 9.216-.756 10.133 0 .092-.04.184-.266.184h-3.035a.24.24 0 01-.265-.184c-.075-.855-.682-7.475-.682-10.041zM18 24.729a2.519 2.519 0 01-2.7-2.661 2.624 2.624 0 012.7-2.739 2.582 2.582 0 012.7 2.739 2.52 2.52 0 01-2.7 2.661z"}})])
          )
        }
      }
    