
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
            children.concat([_c('path',{attrs:{"d":"M35 4H1a1 1 0 00-1 1v26a1 1 0 001 1h34a1 1 0 001-1V5a1 1 0 00-1-1zm-1 26h-3.456c-1.238-1.822-3.516-3.556-7.63-3.974a1.335 1.335 0 01-1.155-1.34v-1.933a1.341 1.341 0 01.34-.863 10.209 10.209 0 002.323-6.372C24.422 10.695 21.865 8 18 8s-6.5 2.8-6.5 7.517a10.324 10.324 0 002.434 6.372 1.336 1.336 0 01.341.863v1.925a1.328 1.328 0 01-1.159 1.34C8.876 26.388 6.6 28.143 5.4 30H2V6h32z"}})])
          )
        }
      }
    