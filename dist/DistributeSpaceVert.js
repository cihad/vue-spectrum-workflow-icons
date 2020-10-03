
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
            children.concat([_c('rect',{attrs:{"height":"10","rx":"1","ry":"1","width":"24","x":"10","y":"22"}}),_c('rect',{attrs:{"height":"12","rx":"1","ry":"1","width":"16","x":"12","y":"4"}}),_c('path',{attrs:{"d":"M7.5 16a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H4v-3.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V14H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H2v6H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H2v3.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V24h3.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H4v-6z"}})])
          )
        }
      }
    