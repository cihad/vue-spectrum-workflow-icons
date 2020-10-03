
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
            children.concat([_c('path',{attrs:{"d":"M34.092 12.044C33.276 6.93 27.3 3.488 20.008 3.488a24.207 24.207 0 00-3.8.305C7.281 5.217.82 11.219 1.774 17.2a7.861 7.861 0 001.737 3.752 8.67 8.67 0 00-.015.417c0 2.737 2.732 4.956 6.1 4.956a7.239 7.239 0 00.916-.075A6.6 6.6 0 0111.8 28.1a2.434 2.434 0 01-.237 2.115 5.314 5.314 0 01-3.224 1.666.5.5 0 00-.414.541l.1 1a.5.5 0 00.579.446c1.055-.187 3.409-.783 4.6-2.506a4.37 4.37 0 00.528-3.779 5.847 5.847 0 00-1.117-1.928c.068-.032.118-.083.185-.116a22.05 22.05 0 003.06.218 24.22 24.22 0 003.8-.3c8.925-1.43 15.386-7.433 14.432-13.413zM5.5 21.369a2.953 2.953 0 011.972-2.5 6.41 6.41 0 00-.142 3.063 6.544 6.544 0 001.44 2.329c-1.842-.284-3.27-1.493-3.27-2.892zm5.752 2.691l-.008-.008a10.663 10.663 0 01-1.974-2.608 5.815 5.815 0 01.448-3.024c2.17.048 3.984 1.374 3.984 2.949a3.146 3.146 0 01-2.454 2.691zm8.1-.584a22.2 22.2 0 01-3.488.28c-.369 0-.717-.042-1.077-.061l.619-.87a4.066 4.066 0 00.3-1.456c0-2.738-2.731-4.957-6.1-4.957a6.615 6.615 0 00-4.87 1.988l-.249.4a5.594 5.594 0 01-.738-1.913C2.983 12.085 8.832 7 16.521 5.768a22.191 22.191 0 013.488-.28c6.381 0 11.473 2.89 12.108 6.871.766 4.799-5.083 9.89-12.772 11.117z"}})])
          )
        }
      }
    