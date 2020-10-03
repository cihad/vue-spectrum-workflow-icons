
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
            children.concat([_c('circle',{attrs:{"cx":"9.253","cy":"29.988","r":"1.1"}}),_c('circle',{attrs:{"cx":"5.653","cy":"26.121","r":"1.1"}}),_c('circle',{attrs:{"cx":"14.008","cy":"32.269","r":"1.1"}}),_c('circle',{attrs:{"cx":"19.204","cy":"32.756","r":"1.1"}}),_c('circle',{attrs:{"cx":"24.288","cy":"31.419","r":"1.1"}}),_c('circle',{attrs:{"cx":"28.633","cy":"28.392","r":"1.1"}}),_c('circle',{attrs:{"cx":"31.546","cy":"24.202","r":"1.1"}}),_c('path',{attrs:{"d":"M18 1.8a15.948 15.948 0 0111.273 4.66L32.7 4.1a.5.5 0 01.781.463l-1.048 10.221-9.9-2.679a.5.5 0 01-.153-.894l3.346-2.3a13.533 13.533 0 00-8.7-3.1c-7.18 0-13.019 5.457-13.019 12.084v.028a14.832 14.832 0 00.344 3.006 1.072 1.072 0 01-.7 1.254 1.08 1.08 0 01-1.262-.856A16 16 0 0118 1.8z"}})])
          )
        }
      }
    