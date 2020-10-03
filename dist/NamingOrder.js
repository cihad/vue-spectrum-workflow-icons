
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
            children.concat([_c('path',{attrs:{"d":"M6.161 16.735L4.62 21.756c-.056.182-.141.244-.308.244h-2.8c-.169 0-.225-.091-.2-.3L7.085 3.857a5.029 5.029 0 00.253-1.643c0-.123.056-.214.168-.214H11.4c.141 0 .168.03.2.183l6.471 19.543c.029.183 0 .274-.168.274h-3.141a.281.281 0 01-.281-.183l-1.625-5.082zm5.8-3.319c-.588-2.01-1.905-6.24-2.466-8.371h-.028c-.448 2.04-1.57 5.6-2.409 8.371zM19.226 34c-.113 0-.225-.03-.225-.244v-2.04a.692.692 0 01.084-.365l9.722-14.064h-9.385c-.141 0-.225-.029-.2-.212l.42-2.831c.028-.182.112-.244.251-.244h13.033c.138 0 .168.062.168.183v2.192a.653.653 0 01-.141.426L23.4 30.683h10.03c.138 0 .2.091.138.274l-.447 2.8c-.027.182-.084.244-.252.244z"}})])
          )
        }
      }
    