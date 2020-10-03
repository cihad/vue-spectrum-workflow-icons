
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
            children.concat([_c('path',{attrs:{"d":"M15.8 26.862a12.346 12.346 0 01.525-2.835 8.2 8.2 0 119.854-8.186c.271-.021.541-.042.816-.042a11.213 11.213 0 016.435 2.14l.57-.576V7a1 1 0 00-1-1h-6.05L23.6 2.326A1 1 0 0022.859 2h-9.718a1 1 0 00-.739.326L9.05 6H3a1 1 0 00-1 1v20a1 1 0 001 1h12.733z"}}),_c('path',{attrs:{"d":"M23.975 16.247c0-.084.025-.163.025-.247a6 6 0 10-6.8 5.919 11.413 11.413 0 016.775-5.672zM27 33.363a6.143 6.143 0 01-4.718-2.1l2.282-2.287H18.1v6.477l2.476-2.481A8.648 8.648 0 0027 35.9a9.2 9.2 0 008.9-8.9h-2.255A6.812 6.812 0 0127 33.363zm6.485-12.337A9.112 9.112 0 0027 18.1a9.2 9.2 0 00-8.9 8.9h2.255A6.812 6.812 0 0127 20.636a6.214 6.214 0 014.817 2.093l-2.245 2.293H35.9V18.56z"}})])
          )
        }
      }
    