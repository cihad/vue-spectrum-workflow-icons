
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
            children.concat([_c('path',{attrs:{"d":"M16 2v10H6L16 2z"}}),_c('path',{attrs:{"d":"M20 34V17.861c0-3.3 4.666-4.8 9-4.8.332 0 .666.025 1 .043V3a1 1 0 00-1-1H18v11a1 1 0 01-1 1H6v19a1 1 0 001 1z"}}),_c('path',{attrs:{"d":"M29 28c-3.866 0-7-1.253-7-2.8v-4c0 1.546 3.134 3.066 7 3.066s7-1.52 7-3.066v4c0 1.547-3.134 2.8-7 2.8zm7 5.179v-5.158c0 1.546-3.134 2.8-7 2.8s-7-1.253-7-2.8v5.159c0 1.546 3.134 2.8 7 2.8s7-1.254 7-2.801zm0-15.068c0-1.546-3.195-2.626-7.061-2.626S22 16.565 22 18.111s3.134 2.8 7 2.8 7-1.253 7-2.8z"}})])
          )
        }
      }
    