
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
            children.concat([_c('path',{attrs:{"d":"M4 18h2v6H4zm2 12v-2H4v3.111a.889.889 0 00.889.889H8v-2zm6 0h6v2h-6zm18-18h2v6h-2zm1.111-8H28v2h2v2h2V4.889A.889.889 0 0031.111 4zM18 4h6v2h-6z"}}),_c('rect',{attrs:{"height":"43.854","rx":".818","ry":".818","transform":"rotate(-45 18 18)","width":"2.455","x":"16.773","y":"-3.927"}}),_c('path',{attrs:{"d":"M32 27.437V22h-2v3.437l2 2zM25.436 30H22v2h5.436l-2-2zM4 8.563V14h2v-3.437l-2-2zM10.562 6H14V4H8.562l2 2z"}})])
          )
        }
      }
    