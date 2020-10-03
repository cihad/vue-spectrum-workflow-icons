
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm.488 16.525s-1.389-2.771-1.842-3.688c-.4.923-1 2.22-1.363 3.014l-.311.675H12l3.621-6.333L12.127 18h3.98l.389.808c.393.816.883 1.831 1.27 2.68.361-.885.748-1.715 1.154-2.582l.42-.906h3.977l-3.535 6.124 3.709 6.4z"}})])
          )
        }
      }
    