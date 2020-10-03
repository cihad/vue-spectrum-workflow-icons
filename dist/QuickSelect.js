
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
            children.concat([_c('path',{attrs:{"d":"M16.333 17.814a4.468 4.468 0 00-3.14.838 6.435 6.435 0 00-1.968 3.436c-.433 1.378-.948 2.877-2.182 3.627a2.28 2.28 0 00-.588.41.524.524 0 00-.062.657.729.729 0 00.4.189c3.317.764 7.549 1.018 10.278-1.434a4.4 4.4 0 00-1.281-7.327 4.714 4.714 0 00-1.457-.396zm6.604 1.713c5.707-6.49 12.954-15.41 11.056-17.308S24.235 9.174 18.582 15.37a7.93 7.93 0 014.355 4.157zM7.469 5.954l-.6-2.037A11.153 11.153 0 003.064 8.39l1.985.483a9.007 9.007 0 012.42-2.919zM4 13c0-.242.052-.469.071-.706l-1.988-.484A11.163 11.163 0 002 13.111v3.111h2zm0 10v-3.222H2v3.111a11.167 11.167 0 00.11 1.483l1.98-.483A8.717 8.717 0 014 23zm1.14 4.293l-1.994.486a11.151 11.151 0 003.726 4.3l.6-2.038a8.979 8.979 0 01-2.332-2.748zM13 32a8.87 8.87 0 01-2.3-.336l-.563 1.921a10.864 10.864 0 005.948 0L15.5 31.6a8.868 8.868 0 01-2.5.4zm7.886-4.755A8.991 8.991 0 0118.71 29.9l.64 2.185a11.154 11.154 0 003.727-4.3zm.056-18.389q.805-.869 1.554-1.66a11.1 11.1 0 00-3.146-3.279L18.71 6.1a8.98 8.98 0 012.232 2.756zM13 4a8.867 8.867 0 012.5.4l.581-1.983a10.864 10.864 0 00-5.948 0l.562 1.92A8.884 8.884 0 0113 4z"}})])
          )
        }
      }
    