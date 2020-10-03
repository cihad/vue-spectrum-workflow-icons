
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
            children.concat([_c('path',{attrs:{"d":"M14.7 27a12.39 12.39 0 01.219-2.278h-1.136a.405.405 0 01-.4-.405v-2.433a.406.406 0 01.4-.406h2.237a12.322 12.322 0 016.909-6.078L15.708 2.482a.811.811 0 00-1.416 0L.725 26.76a.811.811 0 00.708 1.207h13.316A12.37 12.37 0 0114.7 27zM13.378 9.718a.406.406 0 01.4-.406h2.434a.406.406 0 01.405.406v9.733a.405.405 0 01-.405.405h-2.429a.405.405 0 01-.4-.405z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    