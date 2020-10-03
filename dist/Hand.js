
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
            children.concat([_c('path',{attrs:{"d":"M34.11 9.757a2.678 2.678 0 00-2.91 1.587l-3.267 5.048c-.238.48-.85.927-1.285.738s-.555-.7-.335-1.511l1.571-9.226A2.382 2.382 0 0025.809 3.4a2.469 2.469 0 00-2.558 1.875l-1.5 8.6s-.109 1.117-1 1.079-.794-1.181-.794-1.181V3.714a2.381 2.381 0 10-4.761 0v10.021c0 .629-.957.613-1.135.1-.819-2.389-2.62-7.794-2.62-7.794a2.47 2.47 0 00-2.668-1.71A2.383 2.383 0 006.9 7.45l3.244 9.434a8.039 8.039 0 01.3 1.281 1.984 1.984 0 01-.893 2.183c-.463.265-4.884-3.119-5.239-3.278-2.07-1.2-3.375-.692-3.943-.018-.655.776-.2 2.05.747 3.032l6.967 7.909A10.646 10.646 0 019.2 29.52a17.341 17.341 0 001.64 2.369c1.667 1.825 4.028 2.778 7.539 2.778 4.432 0 7.72-1.694 8.889-4.444.793-2.3 1.545-5.408 1.905-6.489.235-.706 6-10.826 6-10.826.642-1.295.381-2.708-1.063-3.151z"}})])
          )
        }
      }
    