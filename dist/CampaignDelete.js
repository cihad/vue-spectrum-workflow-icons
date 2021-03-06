
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
            children.concat([_c('path',{attrs:{"d":"M4.227 20.311H0A16.172 16.172 0 0013.688 34v-4.228a12.006 12.006 0 01-9.461-9.461zm9.461-14.083V2A16.172 16.172 0 000 15.688h4.228a12.005 12.005 0 019.46-9.46zm14.084 9.46H32A16.172 16.172 0 0018.312 2v4.228a12.005 12.005 0 019.46 9.46zM27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h9a.5.5 0 01.5.5zM20.112 16.809a4.289 4.289 0 10-4.465 5.455 12.344 12.344 0 014.465-5.455z"}})])
          )
        }
      }
    