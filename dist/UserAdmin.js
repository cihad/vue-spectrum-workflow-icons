
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
            children.concat([_c('path',{attrs:{"d":"M13.62 25.92a12.287 12.287 0 015.427-10.2 1.48 1.48 0 01.331-.753 10.775 10.775 0 001.962-3.679 9.906 9.906 0 00.577-3.146 10.792 10.792 0 00-.517-3.428A6.358 6.358 0 0014.961 0a6.8 6.8 0 00-4.05 1.229 6.032 6.032 0 00-1.3 1.33A9.021 9.021 0 007.963 8.1a9.453 9.453 0 00.276 2.133 10.975 10.975 0 002.261 4.774 1.443 1.443 0 01.367.93c.031.837.083 1.466.083 2.032a1.431 1.431 0 01-1.25 1.444c-8.366.728-9.673 6.45-9.673 8.707 0 .251.048 1.526.048 1.526H14.2a12.284 12.284 0 01-.58-3.726z"}}),_c('path',{attrs:{"d":"M35.23 24.541h-2.415a6.98 6.98 0 00-1.02-2.476l1.72-1.72a.69.69 0 000-.975l-1.045-1.045a.69.69 0 00-.975 0l-1.72 1.72a6.983 6.983 0 00-2.475-1.02V16.61a.69.69 0 00-.69-.69h-1.38a.69.69 0 00-.69.69v2.415a6.983 6.983 0 00-2.475 1.02l-1.72-1.72a.69.69 0 00-.975 0l-1.045 1.045a.69.69 0 000 .975l1.72 1.72a6.98 6.98 0 00-1.02 2.476H16.61a.69.69 0 00-.69.69v1.379a.69.69 0 00.69.69h2.415a6.98 6.98 0 001.02 2.476l-1.72 1.72a.689.689 0 000 .975l1.045 1.045a.69.69 0 00.975 0l1.72-1.72a6.983 6.983 0 002.475 1.02v2.414a.69.69 0 00.69.69h1.38a.69.69 0 00.69-.69v-2.415a6.983 6.983 0 002.475-1.02l1.72 1.72a.69.69 0 00.975 0l1.045-1.045a.689.689 0 000-.975l-1.72-1.72a6.98 6.98 0 001.02-2.476h2.415a.69.69 0 00.69-.69V25.23a.69.69 0 00-.69-.689zm-9.31 4.975a3.6 3.6 0 113.6-3.6 3.6 3.6 0 01-3.6 3.599z"}})])
          )
        }
      }
    