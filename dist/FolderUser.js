
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
            children.concat([_c('path',{attrs:{"d":"M16 6H2V3.5A1.5 1.5 0 013.5 2h7.672a2 2 0 011.414.586zm12.677 22.542v-1.4a.966.966 0 01.246-.623 7.366 7.366 0 001.675-4.6c0-3.479-1.845-5.424-4.633-5.424s-4.686 2.021-4.686 5.424a7.447 7.447 0 001.756 4.6.965.965 0 01.246.623v1.389a.958.958 0 01-.836.967c-5.6.487-6.439 4.319-6.439 5.83L16 36h20v-.667c0-1.448-.989-5.266-6.49-5.825a.963.963 0 01-.833-.966z"}}),_c('path',{attrs:{"d":"M19.689 26.959a10.321 10.321 0 01-1.41-5.031c0-4.959 3.16-8.424 7.686-8.424 4.564 0 7.633 3.385 7.633 8.424a10.492 10.492 0 01-1.361 5.059 10.683 10.683 0 011.763.692V9a1 1 0 00-1-1H2v21a1 1 0 001 1h11.971a9.048 9.048 0 014.718-3.041z"}})])
          )
        }
      }
    