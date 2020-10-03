
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
            children.concat([_c('path',{attrs:{"d":"M23.652 19.889A23.3 23.3 0 0017 19a23.3 23.3 0 00-6.652.889.5.5 0 00-.348.484v7.947a.514.514 0 00.315.469A16.582 16.582 0 0017 29.9a17.163 17.163 0 006.686-1.111.509.509 0 00.314-.469v-7.947a.5.5 0 00-.348-.484z"}}),_c('path',{attrs:{"d":"M27.995 7C27.939 3.549 22.272 2.1 17 2.1S6.061 3.549 6.005 7H6v22h.005c.056 3.451 5.723 4.9 10.995 4.9s10.939-1.449 10.995-4.9H28V7zM17 4.1c5.384 0 9 1.525 9 2.95S22.384 10 17 10 8 8.475 8 7.05s3.616-2.95 9-2.95zm9 24.95c0 1.425-3.616 2.95-9 2.95s-9-1.525-9-2.95c0-.017.007-.033.008-.05H8V10.093C10.128 11.41 13.643 12 17 12s6.872-.59 9-1.907V29h-.008c.001.017.008.033.008.05z"}})])
          )
        }
      }
    