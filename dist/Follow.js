
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
            children.concat([_c('path',{attrs:{"d":"M14.088 28.9l-.758.1a2.9 2.9 0 01-3.252-2.506l-.3-2.725 6.516-.845.3 2.725a2.9 2.9 0 01-2.506 3.251zM11.945 1.338C10.27-.615 8.4-.8 7.073 3.308c-1.96 8.7-.44 12.21 2.322 17.92l6.516-.845c-.7-5.394.644-7.815.362-9.986a17.567 17.567 0 00-4.328-9.059zm9.428 34.494l.754.127a2.9 2.9 0 003.346-2.38l.4-2.659-6.473-1.093-.4 2.659a2.9 2.9 0 002.373 3.346zm3.2-27.462c1.749-1.888 3.628-2 4.794 2.155 1.626 8.767-.027 12.218-3.006 17.818l-6.485-1.093c.9-5.363-.344-7.834.02-9.992a17.569 17.569 0 014.672-8.888z"}})])
          )
        }
      }
    