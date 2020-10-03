
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
            children.concat([_c('path',{attrs:{"d":"M4.847 17.782l-1.309 3.986a.236.236 0 01-.262.193H.9c-.143 0-.19-.072-.167-.242l4.9-14.156a3.743 3.743 0 00.214-1.3c0-.1.048-.169.143-.169H9.3c.119 0 .143.024.167.145l5.5 15.509c.024.145 0 .217-.143.217H12.15a.238.238 0 01-.238-.145l-1.38-4.034zm4.925-2.633c-.5-1.594-1.618-4.952-2.094-6.643h-.024c-.381 1.619-1.332 4.445-2.046 6.643zm6.896 3.34c.009 0 .23-.314.387-.468l1-1a3.028 3.028 0 011.262-.747l2.924-11.1c.024-.1 0-.121-.095-.121h-2c-.1 0-.119 0-.144.1-.002-.005-3.484 13.366-3.334 13.336zm8.7-4.474h1.322a3.042 3.042 0 012.173.917h.161a6.171 6.171 0 011.618.169 2.111 2.111 0 011.445 1.05 3.033 3.033 0 011.913.866l1.008 1.008c.066.066.091.153.149.224a4.482 4.482 0 00.149-1.118 4.05 4.05 0 00-2.284-3.745 3.789 3.789 0 001.5-3.14c0-1.546-.762-4.2-5.734-4.2-1.594 0-3.759.048-4.615.072-.119.024-.143.1-.143.218v8.006a3.024 3.024 0 011.338-.327zm1.491-5.461c.5 0 1.118-.024 1.88-.024 1.95 0 3 .7 3 2.126a2.3 2.3 0 01-.9 1.908 14.426 14.426 0 00-2.165-.145h-1.815zm8.093 16.124h-2.315a6.69 6.69 0 00-.977-2.373l1.648-1.648a.661.661 0 000-.935l-1-1a.661.661 0 00-.935 0l-1.648 1.648a6.693 6.693 0 00-2.373-.978v-2.316a.661.661 0 00-.661-.661h-1.324a.661.661 0 00-.661.661v2.315a6.692 6.692 0 00-2.373.978l-1.648-1.649a.661.661 0 00-.935 0l-1 1a.661.661 0 000 .935l1.65 1.65a6.69 6.69 0 00-.977 2.373H17.1a.661.661 0 00-.661.661v1.322a.661.661 0 00.661.661h2.315A6.69 6.69 0 0020.4 29.7l-1.648 1.648a.661.661 0 000 .935l1 1a.661.661 0 00.935 0l1.648-1.648a6.692 6.692 0 002.373.977v2.315a.661.661 0 00.661.661h1.322a.661.661 0 00.661-.661V32.61a6.693 6.693 0 002.373-.977l1.648 1.648a.661.661 0 00.935 0l1-1a.661.661 0 000-.935L31.66 29.7a6.69 6.69 0 00.977-2.373h2.315a.661.661 0 00.661-.661v-1.327a.661.661 0 00-.661-.661zM26.028 29.6a3.6 3.6 0 113.6-3.6 3.6 3.6 0 01-3.6 3.6z"}})])
          )
        }
      }
    