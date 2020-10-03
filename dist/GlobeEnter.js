
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
            children.concat([_c('path',{attrs:{"d":"M7.211 13.769C6.164 9.982 8.866 8.352 8.6 5.116A16.073 16.073 0 002.065 18c0 9.112 7.943 14.542 13.554 15.732a6.893 6.893 0 001.045.166c2-5.1-1.772-10.789-4.263-14.494-2.073-3.086-3.958-1.177-5.19-5.635z"}}),_c('path',{attrs:{"d":"M23.892 21.841l1.863-1.928a2.443 2.443 0 011.807-.778 2.505 2.505 0 012.5 2.5v2.045h2.9A15.594 15.594 0 0034 19.383a2.393 2.393 0 01-1.153-.352c-1.611-.613-2.992 1.475-3.114-4.164a5.766 5.766 0 011.666-4 3.1 3.1 0 01.73-.349c-.191-.349-.4-.684-.62-1.018-.037.019-.07.044-.109.062-1.25.583-1.423.755-2 0a1.576 1.576 0 01.347-2.326 15.985 15.985 0 00-11.655-5.221c2.027.028 4.446 1.53 3.213 3.929.186-.381-4.027-1.29-4.6-1.29-.772 0 1.575-2.889 1.36-2.639a16.086 16.086 0 00-6.615 1.423c1.094.706 2.312.46 3.544.764a3.014 3.014 0 011.1.452 3.711 3.711 0 00-1.1-.452c-1.818-.211.88 4.777.777 4.114.5-2.292 3.612-3.176 4.566-.147a3.744 3.744 0 01-.837 2.265c-1.411 1.854-1.7 5.154-2.4 4.31-6.591-2.7-5.865.871-3.7 3.258 3.464 3.82 1.706.392 6.242 2.392a34.948 34.948 0 004.25 1.447zm-3.28 10.219a24.582 24.582 0 01-2.3 1.94c.478-.013 2-.165 2.311-.216.477-.078.944-.181 1.406-.3z"}}),_c('path',{attrs:{"d":"M27.126 21.3a.5.5 0 01.874.332v4.045h7a1 1 0 011 1v4a1 1 0 01-1 1h-7V35.5a.5.5 0 01-.874.332L20 28.681z"}})])
          )
        }
      }
    