
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
            children.concat([_c('path',{attrs:{"d":"M14.17 30.392a6.142 6.142 0 00.9-2.179h.8a10.742 10.742 0 010-2.428h-.8a6.141 6.141 0 00-.9-2.179l1.513-1.513a.606.606 0 000-.858l-.92-.92a.607.607 0 00-.858 0l-1.513 1.513a6.147 6.147 0 00-2.178-.9v-2.121a.607.607 0 00-.607-.607H8.393a.607.607 0 00-.607.607v2.125a6.147 6.147 0 00-2.178.9l-1.513-1.516a.607.607 0 00-.858 0l-.92.92a.606.606 0 000 .858l1.513 1.514a6.141 6.141 0 00-.9 2.179H.807a.606.606 0 00-.606.607v1.214a.607.607 0 00.606.607h2.125a6.142 6.142 0 00.9 2.179l-1.516 1.512a.606.606 0 000 .858l.92.92a.607.607 0 00.858 0l1.514-1.514a6.146 6.146 0 002.178.9v2.125a.607.607 0 00.607.607h1.214a.607.607 0 00.607-.607v-2.127a6.146 6.146 0 002.178-.9l1.513 1.513a.607.607 0 00.858 0l.92-.92a.606.606 0 000-.858zM9 30.164A3.164 3.164 0 1112.164 27 3.164 3.164 0 019 30.164zm9.871-10.845a11.206 11.206 0 014.911-3.043 4.192 4.192 0 111.88-.389 10.976 10.976 0 017.8 1.978l.6.243a.864.864 0 001.127-.474l.653-1.6a.865.865 0 00-.474-1.127l-2.8-1.143a8.749 8.749 0 00-.012-3.357l2.811-1.182a.865.865 0 00.462-1.132l-.729-1.71a.865.865 0 00-1.132-.462L31.157 7.1a8.762 8.762 0 00-2.392-2.356l1.143-2.8a.864.864 0 00-.473-1.127l-1.6-.653a.865.865 0 00-1.127.474l-1.143 2.8a8.763 8.763 0 00-3.357.012L21.024.644a.865.865 0 00-1.132-.462L18.183.9a.865.865 0 00-.462 1.132L18.9 4.843a8.756 8.756 0 00-2.356 2.392l-2.8-1.143a.864.864 0 00-1.127.474l-.653 1.6a.865.865 0 00.474 1.127l2.8 1.143a8.761 8.761 0 00.012 3.357l-2.811 1.182a.865.865 0 00-.461 1.132l.719 1.708a.864.864 0 001.132.462l2.81-1.182a8.783 8.783 0 002.232 2.224z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    