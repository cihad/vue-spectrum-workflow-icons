
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
            children.concat([_c('rect',{attrs:{"height":"43.854","rx":".818","ry":".818","transform":"rotate(-45 18 18)","width":"2.455","x":"16.773","y":"-3.927"}}),_c('path',{attrs:{"d":"M11.181 17.275l-6.1 6.1a1 1 0 00-.251.421L2.056 33.1c-.114.376.459.85.783.85a.3.3 0 00.061-.006c.276-.064 7.867-2.344 9.312-2.779a.974.974 0 00.414-.249l6.1-6.1zM4.668 31.338l2.009-6.731 4.72 4.708c-2.161.65-4.862 1.466-6.729 2.023zM33.567 8.2L27.8 2.432a1.215 1.215 0 00-.867-.353H26.9a1.371 1.371 0 00-.927.406l-8.8 8.624 7.543 7.542 8.8-8.623a1.375 1.375 0 00.4-.883 1.223 1.223 0 00-.349-.945z"}})])
          )
        }
      }
    