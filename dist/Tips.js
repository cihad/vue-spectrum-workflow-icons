
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
            children.concat([_c('path',{attrs:{"d":"M28.8 10.613A10.572 10.572 0 0017.986.3a11.349 11.349 0 00-2.169.21A11.033 11.033 0 007.2 10.69C7.2 16.148 12 19.044 12 24v2h12v-2c0-5 4.8-8.048 4.8-13.387zM12 28v2.367a1.5 1.5 0 00.359.973l3.524 4.133a1.5 1.5 0 001.142.527h1.951a1.5 1.5 0 001.141-.527l3.525-4.133a1.5 1.5 0 00.358-.973V28z"}})])
          )
        }
      }
    