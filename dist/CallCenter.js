
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
            children.concat([_c('path',{attrs:{"d":"M31.091 14h-1.455A11.823 11.823 0 0018 2 11.823 11.823 0 006.364 14H4.909A2.956 2.956 0 002 17v6a2.956 2.956 0 002.909 3h4.364V14H9.2A8.941 8.941 0 0118 4.925 8.941 8.941 0 0126.8 14h-.073v11.338a10.183 10.183 0 01-6.211 4.8A3.115 3.115 0 0018 29c-1.607 0-2.909 1.007-2.909 2.25S16.393 33.5 18 33.5a2.788 2.788 0 002.859-1.869A11.682 11.682 0 0028.055 26h3.036A2.956 2.956 0 0034 23v-6a2.956 2.956 0 00-2.909-3z"}})])
          )
        }
      }
    