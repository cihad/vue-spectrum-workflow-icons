
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
            children.concat([_c('path',{attrs:{"d":"M15.1 30H6V6h24v7.568a3.3 3.3 0 01.643-.07 3.672 3.672 0 012.525 1.036l.832.832V3a1 1 0 00-1-1H3a1 1 0 00-1 1v30a1 1 0 001 1h10.772z"}}),_c('path',{attrs:{"d":"M35.645 20.685l-4.324-4.323a1.083 1.083 0 00-.678-.265 1.13 1.13 0 00-.7.3L18.711 27.639a.736.736 0 00-.188.315l-2.444 7.34c-.085.282.345.638.588.638a.231.231 0 00.046-.005c.207-.048 6.26-2.118 7.344-2.444a.733.733 0 00.31-.187L35.6 22.059a1.03 1.03 0 00.3-.662.916.916 0 00-.255-.712zM18.039 33.973l1.978-5.519 3.54 3.531c-1.621.487-4.118 1.57-5.518 1.988z"}})])
          )
        }
      }
    