
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
            children.concat([_c('path',{attrs:{"d":"M30.371 16.743L34 24v9a1 1 0 01-1 1H3a1 1 0 01-1-1V18l10 12 3.584-5.376a.5.5 0 01.832 0L20 30l9.517-13.324a.5.5 0 01.854.067z"}}),_c('path',{attrs:{"d":"M11.769 25.66l2.068-3.1.083-.124a2.5 2.5 0 014.16 0l.083.124 1.911 2.866 7.811-10.935.1-.135a2.5 2.5 0 014.271.335l.074.148L34 18.187V2l-8 10-5.609-5.609a.5.5 0 00-.74.037L7.8 20.9z"}})])
          )
        }
      }
    