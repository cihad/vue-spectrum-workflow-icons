
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
            children.concat([_c('path',{attrs:{"d":"M29.241 2H12.8a.8.8 0 00-.8.806.785.785 0 00.236.56l3.5 3.5a57.07 57.07 0 00-5.442 9.691 29.236 29.236 0 00-2.174 8.486c-.082.853-.12 1.7-.12 2.536a29.888 29.888 0 00.576 5.753.827.827 0 001.618.023l.006-.023a25.346 25.346 0 012.594-6.919 22.717 22.717 0 014.3-5.429 48.574 48.574 0 017.33-5.429l4.209 4.209a.785.785 0 00.56.236.8.8 0 00.807-.8V2.759A.807.807 0 0029.241 2z"}})])
          )
        }
      }
    