
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
            children.concat([_c('path',{attrs:{"d":"M24.194 25.154c2.1-.429 6.515-2.615 6.515-9.387 0-7.2-4.844-11.53-11.53-11.53-7.587 0-13.759 5.1-13.759 14.4 0 6.472 2.914 10.93 8.015 13.545a.408.408 0 01.214.385l-.085 2.833c0 .215-.043.215-.215.172A17.33 17.33 0 012.162 18.81c0-10.115 7.03-17.4 17.145-17.4 8.059 0 14.531 5.229 14.531 14.1 0 8.7-6.387 12.945-13.673 12.945-5.658 0-9.559-3.172-9.559-9.3A9.729 9.729 0 0120.593 9.08a11.411 11.411 0 014.287.686c.171.043.214.086.214.257zm-2.272-13.116a5.746 5.746 0 00-1.757-.214c-3.944 0-6.43 3.129-6.43 7.072 0 3.729 1.972 6.687 6.087 6.687a5.285 5.285 0 001.328-.129z"}})])
          )
        }
      }
    