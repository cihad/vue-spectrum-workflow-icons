
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
            children.concat([_c('path',{attrs:{"d":"M35.645 16.685l-4.324-4.323a.912.912 0 00-.65-.265h-.028a1.035 1.035 0 00-.7.3L14.711 27.639a.736.736 0 00-.188.315l-2.444 7.34c-.085.282.345.638.588.638a.231.231 0 00.046-.005c.207-.048 6.26-2.118 7.344-2.444a.733.733 0 00.31-.187L35.6 18.059a1.03 1.03 0 00.3-.662.916.916 0 00-.255-.712zM14.039 33.973l1.978-5.519 3.54 3.531c-1.621.487-4.118 1.57-5.518 1.988zM27 2H3a1 1 0 00-1 1v24a1 1 0 001 1h9.077l.225-.678a2.7 2.7 0 01.672-1.1L13.2 26H4V4h22v9.166l2-2V3a1 1 0 00-1-1z"}})])
          )
        }
      }
    