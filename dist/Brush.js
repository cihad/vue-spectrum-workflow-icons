
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
            children.concat([_c('path',{attrs:{"d":"M12.509 21.03a4.921 4.921 0 00-4.195 1.2 12.935 12.935 0 00-2.679 4.782c-.463 1.94-.9 3.772-3.36 4.772a.6.6 0 00-.341.712.9.9 0 00.645.658 23.76 23.76 0 001.977.4c2.607.409 7.48.738 10.806-1.652 1.238-.848 2.837-2.982 2.822-4.546a6.813 6.813 0 00-5.675-6.326zM19.9 24.1c7.235-8.227 16.422-19.535 14.016-21.941S21.546 10.976 14.38 18.83a10.051 10.051 0 015.52 5.27z"}})])
          )
        }
      }
    