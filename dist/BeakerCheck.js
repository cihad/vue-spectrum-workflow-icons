
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
            children.concat([_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.128a.5.5 0 010-.707l1.036-1.036a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.702-.004z"}}),_c('path',{attrs:{"d":"M14.7 27a12.229 12.229 0 011.34-5.563l-9.312 2.927L12 14.453V4h8v10.454l.98 1.825a12.231 12.231 0 011.77-.81L22 14V4h1a1 1 0 001-1V1a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 001 1h1v10L.928 31.759A3 3 0 003.659 36h14.977a12.252 12.252 0 01-3.936-9z"}})])
          )
        }
      }
    