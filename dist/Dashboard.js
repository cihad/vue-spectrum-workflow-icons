
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
            children.concat([_c('path',{attrs:{"d":"M7.324 28.053a13.27 13.27 0 01-2.656-7.794A13.483 13.483 0 0117.612 6.741a13.331 13.331 0 0111.064 21.312.725.725 0 00.1 1l.931.775a.733.733 0 001.048-.107 16 16 0 10-25.515 0 .729.729 0 001.045.107l.932-.776a.724.724 0 00.107-.999z"}}),_c('path',{attrs:{"d":"M20.839 23.526a2.909 2.909 0 11-3.474-2.2c.748-.167 5.534-6.2 6.146-5.845.673.39-2.855 7.225-2.672 8.045z"}}),_c('circle',{attrs:{"cx":"7.818","cy":"20.069","r":"1.6"}}),_c('circle',{attrs:{"cx":"10.727","cy":"12.796","r":"1.6"}}),_c('circle',{attrs:{"cx":"25.273","cy":"12.796","r":"1.455"}}),_c('circle',{attrs:{"cx":"18","cy":"9.887","r":"1.455"}}),_c('circle',{attrs:{"cx":"28.182","cy":"20.069","r":"1.455"}})])
          )
        }
      }
    