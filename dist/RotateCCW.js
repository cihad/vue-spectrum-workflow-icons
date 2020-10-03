
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
            children.concat([_c('circle',{attrs:{"cx":"26.747","cy":"29.988","r":"1.1"}}),_c('circle',{attrs:{"cx":"30.347","cy":"26.121","r":"1.1"}}),_c('circle',{attrs:{"cx":"21.992","cy":"32.269","r":"1.1"}}),_c('circle',{attrs:{"cx":"16.796","cy":"32.756","r":"1.1"}}),_c('circle',{attrs:{"cx":"11.712","cy":"31.419","r":"1.1"}}),_c('circle',{attrs:{"cx":"7.367","cy":"28.392","r":"1.1"}}),_c('circle',{attrs:{"cx":"4.454","cy":"24.202","r":"1.1"}}),_c('path',{attrs:{"d":"M18 1.8A15.948 15.948 0 006.727 6.461L3.3 4.1a.5.5 0 00-.781.463l1.048 10.221 9.9-2.679a.5.5 0 00.153-.894l-3.346-2.3a13.533 13.533 0 018.7-3.1c7.18 0 13.019 5.457 13.019 12.084v.028a14.832 14.832 0 01-.344 3.006 1.005 1.005 0 101.963.4A16 16 0 0018 1.8z"}})])
          )
        }
      }
    