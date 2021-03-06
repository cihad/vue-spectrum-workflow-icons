
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
            children.concat([_c('path',{attrs:{"d":"M32.728 3.272a6 6 0 00-8.485 0l-6.456 6.456L3.272 24.243a6 6 0 008.485 8.485l5.943-5.947 15.028-15.024a6 6 0 000-8.485zM19 11a2 2 0 11-2 2 2 2 0 012-2zm-6 10a2 2 0 112-2 2 2 0 01-2 2zm4 4a2 2 0 112-2 2 2 0 01-2 2zm6-6a2 2 0 112-2 2 2 0 01-2 2zM18.453 4.343l1.309-1.512A11.923 11.923 0 0014.449.182l-.42 1.955a9.98 9.98 0 014.424 2.206zm-7.742-2.358L10.472 0h-.007a12.1 12.1 0 00-5.519 2.144H4.94L6.1 3.776a9.988 9.988 0 014.611-1.791zm-8.725 8.761A9.99 9.99 0 013.757 6.13l-1.63-1.159A11.958 11.958 0 000 10.514zm2.389 7.732a9.979 9.979 0 01-2.224-4.416L.2 14.49a11.933 11.933 0 002.671 5.3z"}})])
          )
        }
      }
    