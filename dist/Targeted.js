
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
            children.concat([_c('path',{attrs:{"d":"M17.225 15.281L12 10.056V6.847a2 2 0 00-.586-1.415L6.854.239A.5.5 0 006 .592L4.5 4.5.6 6.018a.5.5 0 00-.354.854l5.173 4.56A1.98 1.98 0 006.828 12h3.173l5.262 5.251a.693.693 0 00.981 0l.981-.981a.693.693 0 000-.989zm2.103-1.038a3.057 3.057 0 01-.449 3.7l-.982.982a3.052 3.052 0 01-3.611.543 3.994 3.994 0 105.042-5.223z"}}),_c('path',{attrs:{"d":"M18 2.1a15.824 15.824 0 00-5.5 1l.675.781A4.343 4.343 0 0114.379 6.9v1.659a10.24 10.24 0 11-5.833 5.863H6.855A4.339 4.339 0 013.827 13.2l-.747-.658A15.891 15.891 0 1018 2.1z"}})])
          )
        }
      }
    