
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
            children.concat([_c('path',{attrs:{"d":"M33 4H3a1 1 0 00-1 1v22a1 1 0 001 1h11l3.536 6.839a.5.5 0 00.928 0L22 28h11a1 1 0 001-1V5a1 1 0 00-1-1zM17.754 25.444a2.557 2.557 0 01-2.7-2.7 2.6 2.6 0 012.7-2.671 2.6 2.6 0 012.7 2.671 2.531 2.531 0 01-2.7 2.7zM20.809 14.2l-.173.164c-.7.662-1.493 1.412-1.493 1.872a2 2 0 00.3 1.04.6.6 0 01-.51.948h-2.089a.941.941 0 01-.692-.271 3.169 3.169 0 01-.7-1.98c0-1.358.837-2.2 1.994-3.353.765-.765 1.1-1.155 1.1-1.684 0-.264 0-.964-1.537-.964a5.651 5.651 0 00-2.8.739l-.181.072h-.118a.609.609 0 01-.616-.614V7.837a.709.709 0 01.357-.68 8.11 8.11 0 013.885-.9c2.968 0 4.961 1.714 4.961 4.266a4.747 4.747 0 01-1.688 3.677z"}})])
          )
        }
      }
    