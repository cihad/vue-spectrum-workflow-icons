
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
            children.concat([_c('path',{attrs:{"d":"M15.136 28H14V18h8v1.208l1.937-1.937L25.207 16H24V6h8v7.063a7.552 7.552 0 012 .428V5a1 1 0 00-1-1H3a1 1 0 00-1 1v24a1 1 0 001 1h12.065a7.664 7.664 0 01.071-2zM14 6h8v10h-8zm-2 22H4V18h8zm0-12H4V6h8z"}}),_c('path',{attrs:{"d":"M25.548 25.421a2.165 2.165 0 00.421.611 2.19 2.19 0 003.094 0l3.609-3.609a2.188 2.188 0 00-3.094-3.094l-.819.819a5.85 5.85 0 00-2.649-.448l1.921-1.921a4.375 4.375 0 016.187 6.187l-3.609 3.609a4.351 4.351 0 01-6.656-.562zm-2.157-3l-3.609 3.609a4.375 4.375 0 006.187 6.187L27.89 30.3a5.851 5.851 0 01-2.649-.445l-.819.819a2.188 2.188 0 01-3.094-3.094l3.609-3.609a2.19 2.19 0 013.094 0 2.157 2.157 0 01.421.611l1.6-1.6a4.351 4.351 0 00-6.656-.562z"}})])
          )
        }
      }
    