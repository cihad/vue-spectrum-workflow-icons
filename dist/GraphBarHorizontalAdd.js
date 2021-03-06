
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
            children.concat([_c('rect',{attrs:{"height":"34","rx":".5","ry":".5","width":"2","x":"2","y":"2"}}),_c('path',{attrs:{"d":"M22.939 12H6v6h12.636A12.25 12.25 0 0124 15.084v-2.023A1.06 1.06 0 0022.939 12zM33 4H6v6h27a1 1 0 001-1V5a1 1 0 00-1-1zM10.775 28H6v6h4.775A1.225 1.225 0 0012 32.775v-3.55A1.225 1.225 0 0010.775 28zm4.106-8H6v6h8.75A12.215 12.215 0 0116 21.52v-.4A1.118 1.118 0 0014.882 20zM27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    