
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
            children.concat([_c('rect',{attrs:{"height":"3.155","rx":".789","ry":".789","transform":"rotate(-44.995 18.023 6.023)","width":"12.619","x":"11.713","y":"4.445"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5zm1.61-10.861l1.418-1.418a.789.789 0 000-1.116l-1.115-1.115a.789.789 0 00-1.116 0l-2.237 2.238a12.207 12.207 0 013.05 1.411zM27 14.7c.1 0 .189.012.286.014L30 12l-6-6-6 6 3.844 3.844A12.231 12.231 0 0127 14.7zm-7.062 2.238L18 15 1.939 29.818a1.5 1.5 0 000 2.122l2.122 2.12a1.5 1.5 0 002.121 0l8.761-9.5a12.305 12.305 0 014.995-7.622z"}})])
          )
        }
      }
    