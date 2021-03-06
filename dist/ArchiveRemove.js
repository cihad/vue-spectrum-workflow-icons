
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
            children.concat([_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"32","y":"2"}}),_c('path',{attrs:{"d":"M27 18.1a8.85 8.85 0 100 17.7 8.85 8.85 0 000-17.7zm5 9.4a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h9a.5.5 0 01.5.5z"}}),_c('path',{attrs:{"d":"M16.893 20H11a1 1 0 01-1-1v-4a1 1 0 011-1h10a1 1 0 011 1v.769a12.109 12.109 0 018-.685V10H2v15a1 1 0 001 1h11.75a12.216 12.216 0 012.143-6z"}})])
          )
        }
      }
    