
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
            children.concat([_c('path',{attrs:{"d":"M6.25 5.634V3a1 1 0 011-1h1.5a1 1 0 011 1v1H24v2H9.756a11.028 11.028 0 00.869 4H22a2 2 0 01-2 2h-8.214a7.636 7.636 0 002.628 2.219l1.358.682-3.827 1.921-.011.006A13.187 13.187 0 016.25 5.634zm17.817 13.5l-.012.006-3.826 1.92 1.357.681A7.675 7.675 0 0124.247 24H16a2 2 0 00-2 2h11.394a11.048 11.048 0 01.851 4H12v2h14.25v1a1 1 0 001 1h1.5a1 1 0 001-1v-2.678a13.189 13.189 0 00-5.683-11.193zM28.75 2h-1.5a1 1 0 00-1 1v2.634c0 3.793-1.83 7.163-4.664 8.586l-8.742 4.389c-4.006 2.012-6.594 6.61-6.594 11.713V33a1 1 0 001 1h1.5a1 1 0 001-1v-2.678c0-3.792 1.83-7.162 4.664-8.586l8.742-4.388c4.006-2.012 6.594-6.61 6.594-11.714V3a1 1 0 00-1-1z"}})])
          )
        }
      }
    