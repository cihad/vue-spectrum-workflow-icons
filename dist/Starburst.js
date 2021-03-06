
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
            children.concat([_c('path',{attrs:{"d":"M18.1 3.325l2.52 7.087 6.793-3.229a.5.5 0 01.666.666l-3.229 6.793 7.087 2.52a.5.5 0 010 .942l-7.087 2.52 3.229 6.793a.5.5 0 01-.666.666l-6.793-3.229-2.52 7.088a.5.5 0 01-.942 0l-2.52-7.087-6.789 3.229a.5.5 0 01-.666-.666l3.229-6.793L3.325 18.1a.5.5 0 010-.942l7.087-2.52-3.229-6.789a.5.5 0 01.666-.666l6.793 3.229 2.52-7.087a.5.5 0 01.938 0z"}})])
          )
        }
      }
    