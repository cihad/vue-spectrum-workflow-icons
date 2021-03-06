
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
            children.concat([_c('path',{attrs:{"d":"M11.136 9.523l-1.496 1.44-5.328-5.24 1.496-1.439 5.328 5.239zm20.665 20.754l-1.496 1.439-5.299-5.334 1.495-1.439 5.3 5.334zM11.057 1.8h2.314v4.629h-2.314zM1.8 11.057h4.629v2.314H1.8zm27.771 11.572H34.2v2.314h-4.629zm-6.942 6.942h2.314V34.2h-2.314zm-4.576-5.863l-5.84 5.878a4.1 4.1 0 11-5.8-5.8l5.858-5.859-2.171-2.173-5.861 5.858A7.176 7.176 0 0014.388 31.76l5.841-5.874zm-.141-11.452l5.81-5.777a4.1 4.1 0 015.8 5.8l-5.793 5.793 2.171 2.174 5.8-5.793A7.176 7.176 0 1021.547 4.3l-5.807 5.78z"}})])
          )
        }
      }
    