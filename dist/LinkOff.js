
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
            children.concat([_c('path',{attrs:{"d":"M11.136 9.523l-1.496 1.44-5.328-5.24 1.496-1.439 5.328 5.239zm20.665 20.754l-1.496 1.439-5.299-5.334 1.495-1.439 5.3 5.334zM11.057 1.8h2.314v4.629h-2.314zM1.8 11.057h4.629v2.314H1.8zm27.771 11.572H34.2v2.314h-4.629zm-6.942 6.942h2.314V34.2h-2.314zm-4.576-5.863l-5.84 5.878a4.101 4.101 0 01-5.8-5.8l5.858-5.858-2.171-2.174-5.861 5.858A7.176 7.176 0 0014.388 31.76l5.842-5.874zm-.136-11.45l5.84-5.878a4.101 4.101 0 115.8 5.8l-5.858 5.858 2.171 2.174 5.861-5.858A7.176 7.176 0 1021.582 4.206L15.74 10.08z"}})])
          )
        }
      }
    