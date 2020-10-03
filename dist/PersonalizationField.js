
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
            children.concat([_c('path',{attrs:{"d":"M31 2H5a1 1 0 00-1 1v30a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1zM12 29.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h5a.5.5 0 01.5.5zm18 0a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h13a.5.5 0 01.5.5zm0-7.5h-2.47c-.946-1.392-2.686-2.161-5.829-2.48a1.018 1.018 0 01-.882-1.023V17.02a1.023 1.023 0 01.26-.659 7.8 7.8 0 001.773-4.868c0-3.684-1.953-5.742-4.905-5.742s-4.962 2.139-4.962 5.742a7.885 7.885 0 001.859 4.868 1.019 1.019 0 01.26.659v1.47a1.015 1.015 0 01-.885 1.024c-3.242.282-4.98 1.067-5.9 2.486H6V4h24z"}})])
          )
        }
      }
    