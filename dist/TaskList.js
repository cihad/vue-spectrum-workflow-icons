
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
            children.concat([_c('path',{attrs:{"d":"M2 3v28a1 1 0 001 1h30a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1zm30 27H4V4h28z"}}),_c('path',{attrs:{"d":"M9.55 15.917a1 1 0 01-.679-.266l-2.077-1.917a1 1 0 011.357-1.47l1.311 1.211 4.28-5.039a1 1 0 111.524 1.3l-4.954 5.833a1 1 0 01-.7.351zm0 10a1 1 0 01-.679-.266l-2.077-1.917a1 1 0 011.357-1.47l1.311 1.211 4.28-5.039a1 1 0 111.524 1.3l-4.954 5.833a1 1 0 01-.7.351z"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"10","x":"18","y":"10"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"10","x":"18","y":"20"}})])
          )
        }
      }
    