
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
            children.concat([_c('path',{attrs:{"d":"M11.8 5.46l-.654-1.9A16.023 16.023 0 006 7.428l1.657 1.159A14.014 14.014 0 0111.8 5.46zm-6.192 6.033l-1.657-1.16a15.839 15.839 0 00-1.844 5.888h2.017a13.919 13.919 0 011.484-4.728zm-1.484 8.284H2.1a16.021 16.021 0 002.145 6.36l1.6-1.206a13.892 13.892 0 01-1.721-5.154zm3.86 7.995l-1.606 1.21a15.869 15.869 0 005.273 3.7l.59-1.929a14.026 14.026 0 01-4.257-2.981zM18 32a13.978 13.978 0 01-2.357-.214l-.59 1.933a15.862 15.862 0 006.44-.116l-.653-1.893A14 14 0 0118 32zm6.2-1.461l.653 1.9A16 16 0 0030 28.569l-1.653-1.158a14.038 14.038 0 01-4.147 3.128zm7.674-10.762a13.9 13.9 0 01-1.484 4.728l1.656 1.159a15.842 15.842 0 001.844-5.887zm0-3.556H33.9a16.02 16.02 0 00-2.147-6.361l-1.6 1.207a13.887 13.887 0 011.721 5.154zm-3.861-7.995l1.607-1.211a15.885 15.885 0 00-5.274-3.7l-.59 1.93a14.023 14.023 0 014.257 2.981zM18 4a14.07 14.07 0 012.356.213l.591-1.935a15.88 15.88 0 00-6.44.117l.653 1.894A14.059 14.059 0 0118 4z"}})])
          )
        }
      }
    