
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
            children.concat([_c('path',{attrs:{"d":"M28.518 15.2a4.727 4.727 0 003.361-4.451c0-3.042-2.177-5.25-6.179-5.25a10.73 10.73 0 00-5.122 1.249.279.279 0 00-.128.288v2.048c0 .128.033.159.193.1A8.663 8.663 0 0125.252 7.9c2.817 0 4 1.376 4 3.168 0 2.049-1.729 3.138-4.546 3.138h-1.182c-.16 0-.192.1-.192.224v2.016c0 .128.064.192.224.192H24.9c3.169 0 5.282 1.153 5.282 3.714 0 2.018-1.408 3.745-4.865 3.745a14.236 14.236 0 01-4.994-1.308 7.585 7.585 0 00.661-3.08c0-4.711-3.473-6.384-6.448-6.384A12.605 12.605 0 009 14.784V3.25a.75.75 0 00-.752-.75h-1.49a.747.747 0 00-.6.3L3.3 5.09a1.494 1.494 0 00-.3.9v.248a.75.75 0 00.75.75H6v14.25a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-3.683a10.539 10.539 0 015.032-1.508c2.547 0 4.1 1.245 4.1 3.753 0 1.925-.939 3.795-3.8 6.955A49.073 49.073 0 019.2 31.794a.5.5 0 00-.169.419v1.418c0 .322.212.369.338.369H21.15c.237 0 .312-.085.4-.3l.47-1.951a.27.27 0 00-.035-.243.357.357 0 00-.3-.1h-4.347c-2.418 0-2.914 0-3.864.062a30.5 30.5 0 003.718-4.025c.747-.917 1.391-1.748 1.939-2.55a16.646 16.646 0 006.217 1.61c4.322 0 7.555-2.208 7.555-6.146a5.222 5.222 0 00-4.385-5.157z"}})])
          )
        }
      }
    