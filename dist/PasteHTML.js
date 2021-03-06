
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
            children.concat([_c('path',{attrs:{"d":"M22 6V4a4 4 0 00-8 0v2h-4v4h16V6zm-2 0h-4V4a2 2 0 014 0z"}}),_c('path',{attrs:{"d":"M31 6h-3v5a1 1 0 01-1 1H9a1 1 0 01-1-1V6H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V7a1 1 0 00-1-1zM14.049 25.183a.4.4 0 010 .563l-1.688 1.688a.4.4 0 01-.563 0l-4.871-4.871a.8.8 0 010-1.125l4.873-4.872a.4.4 0 01.563 0l1.688 1.688a.4.4 0 010 .563L10.866 22zm3.833 4.7a.4.4 0 01-.468.312l-2.34-.468a.4.4 0 01-.313-.468l3.027-15.139a.4.4 0 01.468-.312l2.341.468a.4.4 0 01.312.468zm11.191-7.318L24.2 27.434a.4.4 0 01-.563 0l-1.688-1.688a.4.4 0 010-.563L25.134 22l-3.183-3.183a.4.4 0 010-.563l1.688-1.688a.4.4 0 01.563 0l4.871 4.871a.8.8 0 010 1.126z"}})])
          )
        }
      }
    