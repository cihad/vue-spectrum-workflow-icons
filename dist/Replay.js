
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
            children.concat([_c('path',{attrs:{"d":"M14.338 10.14a.878.878 0 00-.475-.14h-.931A.968.968 0 0012 11v14a.968.968 0 00.932 1h.931a.878.878 0 00.475-.14l11.205-7a1.038 1.038 0 000-1.72z"}}),_c('path',{attrs:{"d":"M33.263 20.625l-.986-.169a.494.494 0 00-.568.394A14 14 0 1119.883 4.127a12.5 12.5 0 018.249 5.035l-1.985 1.984A.49.49 0 0026 11.5a.5.5 0 00.5.5h5.052a.5.5 0 00.448-.447V6.5a.5.5 0 00-.5-.5.494.494 0 00-.35.147l-1.71 1.711a12.44 12.44 0 00-8.957-5.664A16 16 0 005.4 27.861a16 16 0 0028.274-6.642.507.507 0 00-.411-.594z"}})])
          )
        }
      }
    