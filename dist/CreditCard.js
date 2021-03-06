
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
            children.concat([_c('path',{attrs:{"d":"M2 32.512A1.488 1.488 0 003.488 34h26.778a1.488 1.488 0 001.488-1.488V30H2zm28.065-13.486c-2.341 1.174-10.486 4.954-10.789 5.095a6.419 6.419 0 01-2.646.6 4.686 4.686 0 01-4.378-2.82 5.272 5.272 0 011.163-5.757H3.488A1.488 1.488 0 002 17.635v8.926h29.754v-8.73a8.22 8.22 0 01-1.689 1.195z"}}),_c('path',{attrs:{"d":"M11.5 13.172s.265-1.214.791-3.135c.358-1.31 4.972-7.053 6.739-7.642 1.743-.582 11.51-1.125 11.51-1.125L35 9.05s-3.936 6.15-6.266 7.315-10.754 5.077-10.754 5.077-2.194 1.061-3.016-.761c-.625-1.385.788-2.662.788-2.662s3.218-2.232 4.461-3.211c.9-.713 1.861-2.133.586-3.408s-2.575-.012-3.251.574-1.338 1.2-1.338 1.2z"}})])
          )
        }
      }
    