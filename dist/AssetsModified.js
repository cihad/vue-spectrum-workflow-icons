
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
            children.concat([_c('path',{attrs:{"d":"M13.014 25.941L14.955 24H4V4h28v5.982a3.189 3.189 0 011.023.688l.977.977V3a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h9.968c.017-.018.032-.041.046-.059z"}}),_c('path',{attrs:{"d":"M35.645 16.685l-4.323-4.323a.911.911 0 00-.65-.265h-.029a1.028 1.028 0 00-.7.3L14.711 27.639a.748.748 0 00-.188.316l-2.443 7.34c-.085.282.344.638.587.638a.206.206 0 00.046 0c.207-.048 6.26-2.118 7.344-2.444a.735.735 0 00.311-.187L35.6 18.059a1.031 1.031 0 00.3-.662.916.916 0 00-.255-.712zM14.039 33.973l1.978-5.519 3.54 3.531c-1.621.487-4.118 1.57-5.518 1.988z"}})])
          )
        }
      }
    