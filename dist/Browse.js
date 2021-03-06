
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
            children.concat([_c('path',{attrs:{"d":"M35.087 20.17S29.206 7.832 28.442 5.813c-.729-1.926-1.669-3.729-3.729-3.729-2.31 0-3.511 1.674-3.729 3.729-.063.59-.2 2.474-.361 4.23h-5.249c-.2-2.131-.349-4.134-.358-4.23-.181-2.093-1.016-3.73-3.729-3.73-2.06 0-2.91 1.84-3.729 3.729C6.9 7.322.764 20.447.764 20.447h.014a8.2 8.2 0 1015.73 3.263c0-.252-.015-1.466-.038-1.712h3.058c-.022.246-.038 1.461-.038 1.712a8.2 8.2 0 1015.6-3.542zM8.3 29.082a5.37 5.37 0 115.37-5.37 5.37 5.37 0 01-5.37 5.37zm19.392 0a5.37 5.37 0 115.37-5.37 5.37 5.37 0 01-5.362 5.37z"}})])
          )
        }
      }
    