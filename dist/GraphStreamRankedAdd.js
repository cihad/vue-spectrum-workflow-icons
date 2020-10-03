
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
            children.concat([_c('path',{attrs:{"d":"M28 3.5c-2.736 0-3.268 3.8-3.719 9.176a90.77 90.77 0 01-.232 2.4A12.3 12.3 0 0127 14.7c.052 0 .1.007.153.008A5.6 5.6 0 0132 12.5h2v-9zm-18 23a16.8 16.8 0 004.432-.729l.34-.084a12.2 12.2 0 011.728-5.072 19.525 19.525 0 01-2.217-1.337C12.877 18.324 11.662 17.5 10 17.5c-1.682 0-2.611.855-3.686 1.846C5.219 20.355 3.977 21.5 2 21.5v3a8.7 8.7 0 013.926 1.016A8.5 8.5 0 0010 26.5zm0 3c-3.93 0-6.961-2-8-2V34h14.893a12.225 12.225 0 01-2.053-5.239A18.34 18.34 0 0110 29.5zM20 12c-3.271 0-5.615-4-10-4-5.98 0-5.328 4-8 4v6.5c.768 0 1.338-.492 2.281-1.359A7.984 7.984 0 0110 14.5a10.219 10.219 0 015.967 2.3 12.019 12.019 0 002.469 1.387 12.32 12.32 0 012.4-1.816c.229-1.337.37-2.977.451-3.941.039-.457.08-.933.125-1.414A1.84 1.84 0 0120 12zm7 6.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    