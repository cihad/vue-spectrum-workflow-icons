
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
            children.concat([_c('path',{attrs:{"d":"M18 4a.994.994 0 00-.747.336l-11 10a.979.979 0 00-.253.658A1 1 0 007 16h22a1 1 0 001-1.006.979.979 0 00-.255-.658l-11-10A1 1 0 0018 4zm0 28a1 1 0 00.747-.336l11-10a.979.979 0 00.253-.658A1 1 0 0029 20H7a1 1 0 00-1 1.006.979.979 0 00.255.658l11 10A.994.994 0 0018 32z"}})])
          )
        }
      }
    