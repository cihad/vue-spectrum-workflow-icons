
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
            children.concat([_c('path',{attrs:{"d":"M17.292 28.438a3.522 3.522 0 01.2-.438H12v-4h9.167l2-2H12v-4h15.167L29 16.172c.064-.065.138-.113.206-.172H12v-4h18v3.457a3.55 3.55 0 011.5-.407l.115-.006h.092c.1 0 .2.02.294.028V3a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h13.764zM4 4h26v6H4zm6 24H4v-4h6zm0-6H4v-4h6zm0-6H4v-4h6zm25.738 5.764l-3.506-3.5a.736.736 0 00-.526-.215h-.024a.838.838 0 00-.564.247L20.929 28.48a.62.62 0 00-.152.256l-2.661 6.631c-.069.229.28.517.477.517a.256.256 0 00.037 0c.168-.038 5.755-2.4 6.634-2.661a.6.6 0 00.252-.151l10.19-10.19a.834.834 0 00.245-.537.74.74 0 00-.213-.581zM24.769 32.1c-1.314.4-3.928 1.862-5.064 2.2l2.195-5.068z"}})])
          )
        }
      }
    