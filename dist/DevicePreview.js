
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
            children.concat([_c('path',{attrs:{"d":"M34 4H2a2 2 0 00-2 2v24a2 2 0 002 2h32a2 2 0 002-2V6a2 2 0 00-2-2zm-4 24H4V8h26zm3-7.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z"}}),_c('path',{attrs:{"d":"M20.779 12.617A8.563 8.563 0 0017 11.678c-4.951 0-9 4.929-9 6.528 0 1.713 4.262 6.116 8.964 6.116 4.74 0 9.036-4.4 9.036-6.116 0-1.351-2.408-4.195-5.221-5.589zM17 23.271A5.271 5.271 0 1122.271 18 5.271 5.271 0 0117 23.271z"}}),_c('path',{attrs:{"d":"M18.524 18.048A1.524 1.524 0 0117 16.524a1.5 1.5 0 01.771-1.3 2.811 2.811 0 00-.771-.12A2.893 2.893 0 1019.893 18a2.7 2.7 0 00-.1-.683 1.5 1.5 0 01-1.269.731z"}})])
          )
        }
      }
    