
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
            children.concat([_c('path',{attrs:{"d":"M32.674 20H30.78a1.215 1.215 0 00-1.162.938A11.447 11.447 0 0110.5 26.012l-.692-.693 3.955-3.955A.784.784 0 0014 20.8a.8.8 0 00-.754-.8H2.5a.5.5 0 00-.5.5v10.75a.8.8 0 00.8.75.781.781 0 00.56-.236l3.617-3.617.356.357a16.181 16.181 0 007.284 4.331A15.43 15.43 0 0033.665 21.17a1 1 0 00-.991-1.17zM33.2 4a.781.781 0 00-.56.236l-3.621 3.617-.356-.353a16.181 16.181 0 00-7.284-4.331A15.43 15.43 0 002.335 14.83 1 1 0 003.326 16H5.22a1.215 1.215 0 001.162-.938A11.447 11.447 0 0125.5 9.988l.692.693-3.955 3.955A.784.784 0 0022 15.2a.8.8 0 00.754.8H33.5a.5.5 0 00.5-.5V4.754A.8.8 0 0033.2 4z"}})])
          )
        }
      }
    