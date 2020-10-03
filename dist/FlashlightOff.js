
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
            children.concat([_c('path',{attrs:{"d":"M29.361 18.209l-.84.841L16.95 7.479l.841-.84a.817.817 0 011.157 0l10.413 10.413a.817.817 0 010 1.157zM15.317 9.13l-.68.717a1.635 1.635 0 00-.4 1.072L12.6 18.49 2.183 28.911a.817.817 0 000 1.157l3.772 3.771a.817.817 0 001.157 0L17.51 23.4l7.571-1.636a1.635 1.635 0 001.072-.4l.717-.68zm-1.306 14.594l-2.454 2.455a1.228 1.228 0 01-1.736-1.736l2.455-2.454a1.227 1.227 0 011.735 1.735z"}})])
          )
        }
      }
    