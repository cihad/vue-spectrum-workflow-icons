
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
            children.concat([_c('path',{attrs:{"d":"M7.976 23.3c.584 3.042 2.97 8.479 8.486 8.479 3.818 0 5.728-2.442 5.728-5.069 0-2.165-1.485-4.055-4.19-5.9l-1.591-1.01c-3.341-2.258-6.311-4.838-6.311-8.663 0-5.438 5.038-8.8 11.561-8.8a19.74 19.74 0 015.993.922c.955.276 1.644.553 2.174.737a63.223 63.223 0 00-.318 7.051l-1.856.138c-.477-2.9-1.75-7-6.417-7a4.806 4.806 0 00-5.091 4.747c0 2.258 1.485 3.733 4.3 5.484l1.591.967c3.66 2.3 6.683 4.839 6.683 8.986 0 5.807-5.728 9.309-12.834 9.309-4.4 0-8.115-1.567-9.653-2.857.053-1.06.053-3.641 0-7.327z"}})])
          )
        }
      }
    