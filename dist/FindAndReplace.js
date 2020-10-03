
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
            children.concat([_c('path',{attrs:{"d":"M35.63 32.628l-6.275-8.385a12.011 12.011 0 10-20.63-6.9A6.561 6.561 0 0011 18.623a10.005 10.005 0 119.087 7.313c-.031.019-.058.046-.089.064a12.327 12.327 0 01-3.5 1.265 11.988 11.988 0 009.393-.478l6.275 8.385a2.155 2.155 0 003.466-2.544z"}}),_c('path',{attrs:{"d":"M23.467 15.737a11.152 11.152 0 01-5.213 6.974c-5.068 2.8-11.526.878-14.8-4.259l2.415-1.336A8.337 8.337 0 0016.752 20a7.605 7.605 0 003.92-5.1l-3.763-1.125 6.777-3.748 3.828 6.92zM8.556 5.071a6.5 6.5 0 014.416-1.151 13.873 13.873 0 013.4-1.435 8.915 8.915 0 00-9.309.5A8.746 8.746 0 003.5 9.164L0 8.575l3.8 5.332 5.322-3.795L5.9 9.569a6.213 6.213 0 012.656-4.498z"}})])
          )
        }
      }
    