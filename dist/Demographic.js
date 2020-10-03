
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
            children.concat([_c('path',{attrs:{"d":"M7.939 8.1a3.9 3.9 0 10-3.9-3.9 3.9 3.9 0 003.9 3.9zm10 0a3.9 3.9 0 10-3.9-3.9 3.9 3.9 0 003.9 3.9zm10 0a3.9 3.9 0 10-3.9-3.9 3.9 3.9 0 003.9 3.9zm.2 1.9h-.4a6.136 6.136 0 00-4.8 1.863 6.139 6.139 0 00-4.8-1.863h-.4a6.136 6.136 0 00-4.8 1.863A6.139 6.139 0 008.139 10h-.4c-3.2 0-5.8 1.6-5.8 4.8V22a1 1 0 001 1h1l1 10a1 1 0 001 1h4a1 1 0 001-1l1-10h2l1 10a1 1 0 001 1h4a1 1 0 001-1l1-10h2l1 10a1 1 0 001 1h4a1 1 0 001-1l1-10h1a1 1 0 001-1v-7.2c0-3.2-2.597-4.8-5.8-4.8z"}})])
          )
        }
      }
    