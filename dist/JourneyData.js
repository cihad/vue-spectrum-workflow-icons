
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
            children.concat([_c('path',{attrs:{"d":"M29 28c-3.866 0-7-1.253-7-2.8v-4c0 1.546 3.134 3.066 7 3.066s7-1.52 7-3.066v4c0 1.547-3.134 2.8-7 2.8zm7 5.179v-5.158c0 1.546-3.134 2.8-7 2.8s-7-1.253-7-2.8v5.159c0 1.546 3.134 2.8 7 2.8s7-1.254 7-2.801zm0-15.068c0-1.546-3.195-2.626-7.061-2.626S22 16.565 22 18.111s3.134 2.8 7 2.8 7-1.253 7-2.8z"}}),_c('path',{attrs:{"d":"M20 28a2 2 0 01-2-2V10a2 2 0 012-2h4.1a5 5 0 100-2H20a4 4 0 00-4 4v6h-4.1a5 5 0 100 2H16v8a4 4 0 004 4zm9-24a3 3 0 11-3 3 3 3 0 013-3zM7 20a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    