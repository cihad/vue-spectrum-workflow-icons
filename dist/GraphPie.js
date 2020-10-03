
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
            children.concat([_c('path',{attrs:{"d":"M16 12.661V2.73a.515.515 0 00-.588-.507 15.952 15.952 0 00-8.384 4.163.511.511 0 00.057.779l8.121 5.9a.5.5 0 00.794-.404zm4-9.932v30.542a.513.513 0 00.587.506 15.986 15.986 0 000-31.555.513.513 0 00-.587.507zM2 18a15.993 15.993 0 0013.413 15.777.513.513 0 00.587-.506V19.707a.5.5 0 00-.206-.4L4.31 10.959a.51.51 0 00-.756.184A15.872 15.872 0 002 18z"}})])
          )
        }
      }
    