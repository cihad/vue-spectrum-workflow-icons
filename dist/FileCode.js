
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm-4.433 15.225a.257.257 0 01-.209.408h-2.744a.257.257 0 01-.206-.1l-3.461-4.618 3.461-4.615a.256.256 0 01.206-.1h2.744a.257.257 0 01.209.407l-3.505 4.31zm2.766 1.844h-1.866a.514.514 0 01-.495-.652l3.745-13.412a.515.515 0 01.5-.376h1.863a.514.514 0 01.495.652l-3.747 13.413a.514.514 0 01-.494.376zm7.258-1.539a.26.26 0 01-.206.1h-2.743a.257.257 0 01-.209-.408l3.505-4.31-3.505-4.31a.257.257 0 01.209-.407h2.744a.259.259 0 01.206.1l3.461 4.615z"}})])
          )
        }
      }
    