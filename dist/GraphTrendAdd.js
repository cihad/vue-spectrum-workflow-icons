
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
            children.concat([_c('path',{attrs:{"d":"M20.063 16.846l.894-2.459.76 1.518a11.922 11.922 0 017.127-1.052l5.066-7.237A.5.5 0 0034 7.33V2.352a.5.5 0 00-.906-.291l-8.141 11.375-4.058-8.115a.5.5 0 00-.917.053l-5.45 14.992-4.081-4.082a.5.5 0 00-.674-.031L2.18 22.579a.5.5 0 00-.18.384v4.188a.5.5 0 00.829.377l7.048-6.157 4.861 4.861a12.281 12.281 0 015.325-9.386z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    