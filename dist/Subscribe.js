
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
            children.concat([_c('path',{attrs:{"d":"M24.779 21.963L36 30.367V13.541l-11.221 8.422zM22.866 23.4l-3.576 2.694a2.172 2.172 0 01-2.58 0l-3.628-2.719L0 33.068A.981.981 0 001 34h34a.884.884 0 001-.756zm-11.701-1.462L0 13.511v16.684l11.165-8.257z"}}),_c('path',{attrs:{"d":"M19.067.672a2 2 0 00-2.133 0L0 11.365V14h6V9a1 1 0 011-1h22a1 1 0 011 1v5h6v-2.665z"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"16","x":"10","y":"12"}}),_c('path',{attrs:{"d":"M21.83 20h-7.66a.5.5 0 01-.3-.1l-1.882-1.448a.25.25 0 01.147-.452h11.73a.25.25 0 01.152.448L22.135 19.9a.5.5 0 01-.305.1z"}})])
          )
        }
      }
    