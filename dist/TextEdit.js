
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
            children.concat([_c('path',{attrs:{"d":"M16 28V8h8v3a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1H1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1V8h8v20H9a1 1 0 00-1 1v2a1 1 0 001 1h5.667zm19.645-7.315l-4.324-4.323a1.083 1.083 0 00-.678-.265 1.13 1.13 0 00-.7.3L18.711 27.639a.736.736 0 00-.188.315l-2.444 7.34c-.085.282.345.638.588.638a.231.231 0 00.046-.005c.207-.048 6.26-2.118 7.344-2.444a.733.733 0 00.31-.187L35.6 22.059a1.03 1.03 0 00.3-.662.916.916 0 00-.255-.712zM18.039 33.973l1.978-5.519 3.54 3.531c-1.621.487-4.118 1.57-5.518 1.988z"}})])
          )
        }
      }
    