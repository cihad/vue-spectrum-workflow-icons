
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
            children.concat([_c('path',{attrs:{"opacity":".9","d":"M4 32v-2h28v2z"}}),_c('path',{attrs:{"opacity":".8","d":"M4 30v-2h28v2z"}}),_c('path',{attrs:{"opacity":".7","d":"M4 28v-2h28v2z"}}),_c('path',{attrs:{"opacity":".6","d":"M4 26v-2h28v2z"}}),_c('path',{attrs:{"opacity":".5","d":"M4 24v-2h28v2z"}}),_c('path',{attrs:{"opacity":".4","d":"M4 22v-2h28v2z"}}),_c('path',{attrs:{"opacity":".25","d":"M4 16v-2h28v2z"}}),_c('path',{attrs:{"opacity":".3","d":"M4 18v-2h28v2z"}}),_c('path',{attrs:{"opacity":".35","d":"M4 20v-2h28v2z"}}),_c('path',{attrs:{"opacity":".2","d":"M4 14v-2h28v2z"}}),_c('path',{attrs:{"opacity":".15","d":"M4 12v-2h28v2z"}}),_c('path',{attrs:{"opacity":".1","d":"M4 10V8h28v2z"}}),_c('path',{attrs:{"opacity":".05","d":"M4 8V6h28v2z"}}),_c('path',{attrs:{"d":"M3 34h30a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v30a1 1 0 001 1zM32 4v28H4V4z"}})])
          )
        }
      }
    