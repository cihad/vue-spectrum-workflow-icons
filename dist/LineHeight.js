
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"12","y":"4"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"12","y":"16"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"12","y":"28"}}),_c('path',{attrs:{"d":"M9 30H6.994L7 8h2.006a.5.5 0 00.5-.5.49.49 0 00-.147-.35L5.824 3.113a.5.5 0 00-.633 0L1.655 7.146a.491.491 0 00-.148.35.5.5 0 00.5.5h2.008L4.009 30H2a.5.5 0 00-.5.5.49.49 0 00.147.35l3.537 4.033a.5.5 0 00.632 0l3.536-4.033a.491.491 0 00.148-.35.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    