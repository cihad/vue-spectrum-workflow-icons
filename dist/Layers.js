
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
            children.concat([_c('path',{attrs:{"d":"M28.288 19.938l-9.839 6.827a.789.789 0 01-.9 0l-9.837-6.827L1.858 24a.251.251 0 000 .411l15.85 11a.515.515 0 00.584 0l15.85-11a.251.251 0 000-.411z"}}),_c('path',{attrs:{"d":"M17.7 22.988L1.858 12a.249.249 0 010-.41L17.7.594a.53.53 0 01.6 0l15.842 10.992a.249.249 0 010 .41L18.3 22.988a.53.53 0 01-.6 0z"}})])
          )
        }
      }
    