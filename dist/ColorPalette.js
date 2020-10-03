
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
            children.concat([_c('path',{attrs:{"d":"M23.614 6.145c-4.371-.7-9.006 0-9.648 2.092a2.292 2.292 0 001.294 2.908c1.152.647 2.6 2.673 1.139 4.541a2.829 2.829 0 01-3.125 1.126c-3.748-.947-7.893-2.882-11.285.345C-1.1 20.1.158 24.466 3.154 26.842a23.4 23.4 0 0014.513 5.274C27.253 32.116 35.8 26.465 35.8 19c0-7.558-7.168-12.057-12.186-12.855zM8.694 27.453a3.8 3.8 0 113.8-3.8 3.8 3.8 0 01-3.8 3.8zM27.98 11.419a2.5 2.5 0 11-2.5 2.5 2.5 2.5 0 012.5-2.5zm-10.7 18.14A3.561 3.561 0 1120.837 26a3.56 3.56 0 01-3.559 3.559zm7.79-1.5a3.005 3.005 0 113-3 3.005 3.005 0 01-3.002 3.004zM30 22.56a2.675 2.675 0 112.674-2.675A2.674 2.674 0 0130 22.56z"}})])
          )
        }
      }
    