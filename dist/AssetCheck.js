
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
            children.concat([_c('path',{attrs:{"d":"M18.189 7.906A1.806 1.806 0 1016.383 6.1a1.806 1.806 0 001.806 1.806z"}}),_c('path',{attrs:{"d":"M10 10.2a3.447 3.447 0 00-2.1-1.375c-1.845 0-5.9 5.588-5.9 5.588V2h22v6h2V1a1 1 0 00-1-1H1a1 1 0 00-1 1v18a1 1 0 001 1h9z"}}),_c('path',{attrs:{"d":"M15.059 30H14.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h.256a12.2 12.2 0 01.659-3H14.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v2.12a12.218 12.218 0 0114-6.436V12.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v3a.488.488 0 01-.127.307A12.268 12.268 0 0134 16.993V12a2 2 0 00-2-2H14a2 2 0 00-2 2v18a2 2 0 002 2h1.721a12.114 12.114 0 01-.662-2zM14 12.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.127a.5.5 0 010-.707l1.037-1.037a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.703-.004z"}})])
          )
        }
      }
    