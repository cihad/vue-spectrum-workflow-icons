
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm9.7 11.918L16.449 25.167a.732.732 0 01-.309.185c-1.076.323-7.141 2.436-7.347 2.483h-.045c-.241 0-.668-.353-.583-.633l2.482-7.342a.738.738 0 01.187-.313L22.082 8.3a1.019 1.019 0 01.69-.3h.028a.905.905 0 01.645.263l4.292 4.292a.911.911 0 01.261.706 1.022 1.022 0 01-.298.657z"}}),_c('path',{attrs:{"d":"M10.822 25.184c1.025-.306 2.814-1.059 4-1.416l-2.592-2.585z"}})])
          )
        }
      }
    