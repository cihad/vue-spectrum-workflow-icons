
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
            children.concat([_c('path',{attrs:{"d":"M16.2 30H2V10h28v6.2l2 2V5a1 1 0 00-1-1H1a1 1 0 00-1 1v26a1 1 0 001 1h17.2z"}}),_c('path',{attrs:{"d":"M35.668 26.106l-9.88-9.879a.772.772 0 00-.546-.227h-8.47a.772.772 0 00-.772.772v8.471a.772.772 0 00.226.546l9.879 9.88a.772.772 0 001.092 0l8.471-8.469a.772.772 0 000-1.094zM20.4 22.948a2.548 2.548 0 112.548-2.548 2.548 2.548 0 01-2.548 2.548z"}})])
          )
        }
      }
    