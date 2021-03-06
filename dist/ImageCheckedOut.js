
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M33 4H3a1 1 0 00-1 1v22a1 1 0 001 1h12.55c-.028-.33-.05-.662-.05-1a11.452 11.452 0 013.205-7.952l-5.433-5.433a2 2 0 00-2.828 0L4 20.06V6h28v10.298a10.452 10.452 0 012 1.102V5a1 1 0 00-1-1zm-6.3 4.6a2.7 2.7 0 102.7 2.7 2.7 2.7 0 00-2.7-2.7z"}}),_c('path',{attrs:{"d":"M27 18a9 9 0 109 9 9 9 0 00-9-9zm5 10.814a.5.5 0 01-.854.354L29.05 27.07l-4.636 4.636a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l4.636-4.636-2.097-2.096a.5.5 0 01.354-.854h6.527a.287.287 0 01.287.287z"}})])
          )
        }
      }
    