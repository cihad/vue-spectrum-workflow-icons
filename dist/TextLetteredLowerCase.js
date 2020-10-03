
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"4"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"16"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"28"}}),_c('path',{attrs:{"d":"M9.67 8.34c0 .3 0 .576.016.881 0 .031 0 .047-.032.063a7.338 7.338 0 01-3.23.72c-1.727 0-3.1-.8-3.1-2.558 0-1.7 1.6-2.495 3.68-2.495.607 0 .975.032 1.135.047v-.287c0-.431-.225-1.47-1.807-1.47a4.759 4.759 0 00-2.142.478.08.08 0 01-.114-.08V2.5a.158.158 0 01.08-.144 5.831 5.831 0 012.416-.479 2.838 2.838 0 013.1 3.1zM8.135 6.2a8.486 8.486 0 00-1.055-.049c-1.519 0-2.225.478-2.225 1.3 0 .687.481 1.31 1.84 1.31a3.674 3.674 0 001.44-.271zm-2.762 4.759c.09 0 .12 0 .12.09v3.516a4.638 4.638 0 011.629-.27 3.433 3.433 0 013.621 3.545 4.122 4.122 0 01-4.419 4.119 6.961 6.961 0 01-2.219-.317.159.159 0 01-.105-.136V11.049c0-.075.044-.09.105-.09zm1.493 4.6a3.462 3.462 0 00-1.373.241v4.8a3.611 3.611 0 00.951.105 2.613 2.613 0 002.777-2.731 2.235 2.235 0 00-2.355-2.413zM9.908 33.62a.121.121 0 01-.08.129 5.351 5.351 0 01-1.838.256 3.9 3.9 0 01-4.174-4.03c0-2.367 1.776-4.093 4.43-4.093a4.37 4.37 0 011.582.191c.065.031.08.08.08.16L9.893 27.4c0 .1-.047.1-.112.08a3.906 3.906 0 00-1.519-.238 2.682 2.682 0 100 5.355 4.577 4.577 0 001.538-.192c.08-.031.111 0 .111.064z"}})])
          )
        }
      }
    