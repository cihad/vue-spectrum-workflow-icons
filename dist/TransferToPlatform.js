
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6.117 15.924A5.006 5.006 0 0011.9 12h.708l2.277 3.984 1.267-2.218-1.692-2.962A1.596 1.596 0 0013.074 10H11.9a5.003 5.003 0 10-5.783 5.924zm23.766 4.152A5.006 5.006 0 0024.1 24H22l-2.276-3.984-1.268 2.218L20 24.936l.16.28a1.556 1.556 0 001.35.784h2.59a5.003 5.003 0 105.783-5.924zM29 28a3 3 0 113-3 3 3 0 01-3 3zm-7-16h2.1a5 5 0 100-2h-2.59a1.556 1.556 0 00-1.35.784L12.608 24H11.9a5 5 0 100 2h1.174a1.596 1.596 0 001.386-.804zm7-4a3 3 0 11-3 3 3 3 0 013-3z"}})])
          )
        }
      }
    