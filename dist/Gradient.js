
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
            children.concat([_c('path',{attrs:{"opacity":".9","d":"M4 6h2v24H4z"}}),_c('path',{attrs:{"opacity":".8","d":"M6 6h2v24H6z"}}),_c('path',{attrs:{"opacity":".7","d":"M8 6h2v24H8z"}}),_c('path',{attrs:{"opacity":".6","d":"M10 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".5","d":"M12 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".4","d":"M14 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".25","d":"M20 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".3","d":"M18 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".35","d":"M16 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".2","d":"M22 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".15","d":"M24 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".1","d":"M26 6h2v24h-2z"}}),_c('path',{attrs:{"opacity":".05","d":"M28 6h2v24h-2z"}}),_c('path',{attrs:{"d":"M2 5v26a1 1 0 001 1h30a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1zm30 25H4V6h28z"}})])
          )
        }
      }
    