
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm5.473 6.432c1.657 0 3 1.679 3 3.75s-1.343 3.75-3 3.75-3-1.679-3-3.75 1.343-3.75 3-3.75zm-11.108.1c1.656 0 3 1.679 3 3.75s-1.344 3.75-3 3.75-3-1.679-3-3.75 1.343-3.748 3-3.748zm14.512 16.11l-.942.476a1 1 0 01-1.124-.152c-.333-.3-.727-.659-.829-.73a10.487 10.487 0 00-5.941-1.736 10.474 10.474 0 00-6 1.771c-.124.088-.489.424-.8.717a1 1 0 01-1.134.161l-.928-.47a1 1 0 01-.29-1.564c.232-.257.442-.483.526-.558a13.008 13.008 0 018.626-3.057 12.969 12.969 0 018.729 3.15c.047.043.208.219.4.432a1 1 0 01-.293 1.56z"}})])
          )
        }
      }
    