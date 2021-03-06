
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18 2.2A15.8 15.8 0 1033.8 18 15.8 15.8 0 0018 2.2zm12.2 12.574l-6.726 5.392 2.274 8.308a.355.355 0 01-.237.443.351.351 0 01-.306-.049L18 24.144l-7.206 4.731a.355.355 0 01-.543-.394l2.274-8.315L5.8 14.774a.355.355 0 01.208-.639l8.61-.408 3.05-8.063a.355.355 0 01.671 0l3.05 8.063 8.61.408a.355.355 0 01.348.362.351.351 0 01-.147.277z"}})])
          )
        }
      }
    