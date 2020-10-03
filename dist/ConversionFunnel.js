
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
            children.concat([_c('path',{attrs:{"d":"M10 24v11a1 1 0 001 1h12a1 1 0 001-1V24zm11.975 4.2l-5.053 6.738a.375.375 0 01-.565.04L12.7 31.326a.375.375 0 010-.53l1.6-1.596a.375.375 0 01.53 0l1.512 1.512 3.233-4.312a.375.375 0 01.525-.075l1.8 1.35a.375.375 0 01.075.525zM29 12H5l4.167 10h15.666L29 12zm4.25-12H.75a.5.5 0 00-.462.692L4.167 10h25.666L33.712.692A.5.5 0 0033.25 0z"}})])
          )
        }
      }
    