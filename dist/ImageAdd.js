
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
            children.concat([_c('circle',{attrs:{"cx":"23.8","cy":"12.6","r":"2.5"}}),_c('path',{attrs:{"d":"M14.7 27a12.227 12.227 0 011.262-5.4c-2.108-2.358-4.305-5.6-6.177-5.6C7.113 16 2 24 2 24V6h32v10.893a12.366 12.366 0 012 1.743V5a1.068 1.068 0 00-1.125-1H1.125A1.068 1.068 0 000 5v26a1.068 1.068 0 001.125 1h14.644a12.24 12.24 0 01-1.069-5z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    