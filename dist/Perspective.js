
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
            children.concat([_c('path',{attrs:{"d":"M2 3.281v31.276a1 1 0 001.351.936l30-11.25a1 1 0 00.649-.936V10.781a1 1 0 00-.757-.97l-30-7.5A1 1 0 002 3.281zm30 12.836l-6 .4v-6.5l6 1.446zM16 17.19V7.613l8 1.929v7.112zm8 1.356v7.126l-8 2.938v-9.419zM14 7.131v10.193L4 18V4.72zM4 20.16l10-.807v9.992L4 33.017zm22 4.778v-6.554l6-.484v4.834z"}})])
          )
        }
      }
    