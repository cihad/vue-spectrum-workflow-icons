
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
            children.concat([_c('circle',{attrs:{"cx":"18","cy":"3.685","r":"3.685"}}),_c('path',{attrs:{"d":"M12.861 13.247l.518 6.039-4.108 7.068a.558.558 0 00.537.712h4.215l1.654 8.485a.555.555 0 00.545.449h3.557a.555.555 0 00.545-.449l1.654-8.485h4.215a.558.558 0 00.537-.712l-4.07-7.068.487-6.056a3.873 3.873 0 00-1.829-3.745A3.933 3.933 0 0019.421 9h-2.842a3.934 3.934 0 00-1.89.482 3.87 3.87 0 00-1.828 3.765z"}})])
          )
        }
      }
    