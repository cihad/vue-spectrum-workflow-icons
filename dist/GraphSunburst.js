
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
            children.concat([_c('path',{attrs:{"d":"M11.006 15.84h3.329a.494.494 0 00.408-.226 4 4 0 011.075-1.076.494.494 0 00.226-.408V10.8a.5.5 0 00-.648-.479 7.988 7.988 0 00-4.87 4.87.5.5 0 00.48.649zm7.755 9.969a8.073 8.073 0 007.252-7.25 7.976 7.976 0 00-5.283-8.223.505.505 0 00-.685.467v3.327a.5.5 0 00.227.411 3.986 3.986 0 11-5.528 5.528.5.5 0 00-.411-.227h-3.326a.5.5 0 00-.467.685 7.976 7.976 0 008.221 5.282z"}}),_c('path',{attrs:{"d":"M20.392 4.248V7.3a.494.494 0 00.384.479 10.017 10.017 0 017.616 9.712 8.916 8.916 0 01-.11 1.323.5.5 0 00.309.542l2.863 1.127a.5.5 0 00.677-.362 13.709 13.709 0 00.261-2.631A14.011 14.011 0 0020.98 3.75a.5.5 0 00-.588.498zM10.018 7.144l.794.794a.492.492 0 00.623.062 11.917 11.917 0 014.208-1.742.493.493 0 00.4-.481V4.6a.5.5 0 00-.59-.5 13.89 13.89 0 00-5.376 2.28.5.5 0 00-.059.764zM4.8 15.84h1.047a.493.493 0 00.48-.4 11.9 11.9 0 011.713-4.049.493.493 0 00-.058-.625l-.774-.774a.5.5 0 00-.769.066A13.909 13.909 0 004.3 15.251a.5.5 0 00.5.589zm2.323 4H4.8a.5.5 0 00-.5.59 14.02 14.02 0 0011.155 11.154.505.505 0 00.59-.5V28.9a.494.494 0 00-.391-.48A10.685 10.685 0 017.6 20.238a.494.494 0 00-.477-.398zm19.8 4.072a10.667 10.667 0 01-6.488 4.506.5.5 0 00-.392.481v2.183a.505.505 0 00.59.5 14.018 14.018 0 009.249-6.3.5.5 0 00-.248-.731l-2.116-.833a.5.5 0 00-.593.195z"}})])
          )
        }
      }
    