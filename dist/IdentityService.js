
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
            children.concat([_c('path',{attrs:{"d":"M8.607 31.849a1 1 0 01-.546-1.838c7.322-4.776 9.058-13.395 9.076-13.482a1 1 0 011.963.379c-.075.387-1.921 9.544-9.948 14.779a1 1 0 01-.545.162z"}}),_c('path',{attrs:{"d":"M12.638 34.637a1 1 0 01-.628-1.779A27.887 27.887 0 0021.5 17.5a4.008 4.008 0 00-.51-2.876 3.386 3.386 0 00-2.147-1.583 3.445 3.445 0 00-4.1 2.87c-.019.093-1.8 7.962-7.982 11.74a1 1 0 11-1.043-1.707c5.41-3.3 7.049-10.355 7.064-10.425a5.532 5.532 0 016.5-4.429 5.356 5.356 0 013.409 2.484 6 6 0 01.772 4.3 30.019 30.019 0 01-10.2 16.539 1 1 0 01-.625.224zm6.349.156a1 1 0 01-.752-1.659c6.16-7.035 7.176-12.329 7.559-14.323l.069-.356a1 1 0 111.961.4l-.066.336c-.41 2.139-1.5 7.821-8.019 15.264a.994.994 0 01-.752.338zm-13.9-12.332a1 1 0 01-.536-1.845 7.813 7.813 0 002.681-3.279A1 1 0 019 18.274a9.635 9.635 0 01-3.379 4.032 1 1 0 01-.534.155zm4.323-6.768a1.014 1.014 0 01-.189-.017 1 1 0 01-.794-1.171 10.286 10.286 0 017.046-7.936 1 1 0 11.564 1.92 8.265 8.265 0 00-5.645 6.393 1 1 0 01-.982.811zm17.264-.655a1 1 0 01-.964-.735 8.809 8.809 0 00-1-2.3 7.728 7.728 0 00-4.91-3.616 1 1 0 11.426-1.955 9.714 9.714 0 016.19 4.521 10.893 10.893 0 011.228 2.82 1 1 0 01-.7 1.23 1.049 1.049 0 01-.27.035z"}}),_c('path',{attrs:{"d":"M25.937 32.588a1 1 0 01-.835-1.549c4.357-6.632 4.862-11.355 4.881-11.554a17.247 17.247 0 00-.385-6.169 1 1 0 011.907-.6 18.831 18.831 0 01.469 6.965c-.054.546-.655 5.536-5.2 12.456a1 1 0 01-.837.451zM4.776 16.812h-.078a1 1 0 01-.92-1.075c.656-8.514 6.516-12.674 11.336-13.65C24.079.274 28.6 5.851 30.132 8.333a1 1 0 11-1.7 1.049c-1.309-2.125-5.179-6.9-12.918-5.334-4.137.837-9.169 4.44-9.739 11.841a1 1 0 01-.999.923z"}})])
          )
        }
      }
    