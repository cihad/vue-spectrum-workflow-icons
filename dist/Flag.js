
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
            children.concat([_c('path',{attrs:{"d":"M28.583 5.854a19.038 19.038 0 00-4.113.453 1.093 1.093 0 01-1.3-1.084V3.609a1.087 1.087 0 00-.815-1.061A19.492 19.492 0 0017.75 2 19.154 19.154 0 008 4.648v15.165a19.1 19.1 0 019.76-2.646 1.1 1.1 0 011.073 1.1v3.739a.991.991 0 001.406.908 19.279 19.279 0 0112.515-1.435A1.007 1.007 0 0034 20.511V7.4a1 1 0 00-.751-.98 19.44 19.44 0 00-4.666-.566z"}}),_c('rect',{attrs:{"height":"34","rx":".5","ry":".5","width":"4","x":"2","y":"2"}})])
          )
        }
      }
    