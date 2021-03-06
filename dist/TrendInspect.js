
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
            children.concat([_c('path',{attrs:{"d":"M8.9 26.619l-1.6 1.79-3.687-7.227-3.545 2.659 1.405 2.384L2.659 25.2l4.5 8.25 3.955-5.28A14.015 14.015 0 018.9 26.619zm14.17-7.287L26 15.954a7.932 7.932 0 00-.673-3.155L23.4 15.077l-3.312-4.759c-.066-.025-.137-.042-.2-.064l-7.632 11.291a7.987 7.987 0 002.189 1.584l5.548-8.222zm7.945-8.457l4.849-5.443L33.88 3.6l-4.2 4.707a13.9 13.9 0 011.335 2.568z"}}),_c('path',{attrs:{"d":"M35.338 30.3l-7.474-7.474a12.013 12.013 0 10-3.04 3.04l7.476 7.472a2.155 2.155 0 003.04-3.04zM8 16a10 10 0 1110 10A10 10 0 018 16z"}})])
          )
        }
      }
    