
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
            children.concat([_c('path',{attrs:{"d":"M16.4 35.594L2.823 28.051A1.6 1.6 0 012 26.652V13.194l14.4 8zm16.777-7.543L19.6 35.594v-14.4l14.4-8v13.458a1.6 1.6 0 01-.823 1.399zm-8.54-24.334L18.762.535a1.6 1.6 0 00-1.524 0L2.592 8.468a.825.825 0 000 1.451l5.529 2.995zm8.771 4.751L27.97 5.523l-16.515 9.2L18 18.265l15.408-8.346a.825.825 0 000-1.451z"}})])
          )
        }
      }
    