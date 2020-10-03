
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
            children.concat([_c('path',{attrs:{"d":"M7.9 28.9l-.758.1a2.9 2.9 0 01-3.252-2.506l-.3-2.725 6.516-.845.3 2.725A2.9 2.9 0 017.9 28.9zM5.759 1.338C4.083-.615 2.21-.8.886 3.308c-1.96 8.7-.44 12.21 2.323 17.92l6.516-.845c-.7-5.394.643-7.815.362-9.986a17.569 17.569 0 00-4.328-9.059zm7.93 25.912l1.019.171c0-.14-.008-.28-.008-.421a12.305 12.305 0 019.067-11.87 37.439 37.439 0 00-.593-4.6c-1.164-4.16-3.043-4.048-4.792-2.16a17.564 17.564 0 00-4.672 8.888c-.364 2.158.885 4.629-.021 9.992zm1.418 2.897l-1.9-.32-.4 2.659a2.9 2.9 0 002.38 3.346l.754.127a2.894 2.894 0 002.146-.483 12.278 12.278 0 01-2.98-5.329z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.934 6.934 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}})])
          )
        }
      }
    