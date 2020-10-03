
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
            children.concat([_c('path',{attrs:{"d":"M35.895 34.782l-11.18-20.007a.819.819 0 00-1.429 0L12.105 34.782A.819.819 0 0012.82 36h22.36a.819.819 0 00.715-1.218zm-10.527-1.974a.456.456 0 01-.456.456h-1.824a.456.456 0 01-.456-.456v-1.825a.456.456 0 01.456-.456h1.824a.456.456 0 01.456.456zm0-4.56a.456.456 0 01-.456.456h-1.824a.456.456 0 01-.456-.456v-8.21a.456.456 0 01.456-.456h1.824a.456.456 0 01.456.456z"}}),_c('path',{attrs:{"d":"M12.968 26h1.754l1.117-2H4V4h28v19.712l1.25 2.237A.986.986 0 0034 25V3a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h9.968z"}})])
          )
        }
      }
    