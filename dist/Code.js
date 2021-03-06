
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
            children.concat([_c('path',{attrs:{"d":"M35.493 19.061l-8.193 8.32a1 1 0 01-1.425 0l-.893-.907a1.006 1.006 0 010-1.4L31.943 18l-6.959-7.071a1.006 1.006 0 010-1.4l.893-.907a1 1 0 011.425 0l8.191 8.32a1.523 1.523 0 010 2.119zM.507 16.939L8.7 8.619a1 1 0 011.425 0l.893.907a1.006 1.006 0 010 1.4L4.057 18l6.959 7.071a1.006 1.006 0 010 1.4l-.893.907a1 1 0 01-1.425 0L.507 19.061a1.523 1.523 0 010-2.122zm14.982 12.748h-1.144a1 1 0 01-.966-1.259l6.192-23.041a1 1 0 01.966-.741h1.105a1 1 0 01.966 1.254l-6.153 23.046a1 1 0 01-.966.741z"}})])
          )
        }
      }
    