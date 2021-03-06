
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
            children.concat([_c('circle',{attrs:{"cx":"18","cy":"18","r":"4.3"}}),_c('path',{attrs:{"d":"M6.227 20.311H2A16.172 16.172 0 0015.688 34v-4.227a12.007 12.007 0 01-9.461-9.462zm23.546 0a12.007 12.007 0 01-9.461 9.462V34A16.172 16.172 0 0034 20.311zM15.688 6.228V2A16.171 16.171 0 002 15.688h4.228a12 12 0 019.46-9.46zm14.084 9.46H34A16.171 16.171 0 0020.312 2v4.228a12 12 0 019.46 9.46z"}})])
          )
        }
      }
    