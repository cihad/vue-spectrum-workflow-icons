
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
            children.concat([_c('path',{attrs:{"d":"M14.748 28.057a7.957 7.957 0 01-.822-.232c-.52.52-1.5 1.547-1.713 1.762a4.1 4.1 0 11-5.8-5.8L13.6 16.6a4.585 4.585 0 013.366-1.292 3.94 3.94 0 012.678 1.112 6.533 6.533 0 01.439.511 12.246 12.246 0 012.553-1.319 6.845 6.845 0 00-.951-1.233 7.311 7.311 0 00-10.26.047l-7.186 7.186A7.176 7.176 0 0014.388 31.76c.142-.142.478-.485.9-.913a12.248 12.248 0 01-.54-2.79zm8.974-21.578a4.1 4.1 0 115.8 5.8L27 14.8a12.291 12.291 0 013.759.59l.938-.937A7.176 7.176 0 0021.547 4.3c-.385.385-4.264 4.222-5.351 5.309a8.3 8.3 0 013.742.607c.521-.516 3.569-3.522 3.784-3.737z"}}),_c('path',{attrs:{"d":"M16.926 20.056a3.579 3.579 0 01-.594-.478 4.159 4.159 0 01-1.241-1.625 2.053 2.053 0 00-.428.318l-1.636 1.712a7.155 7.155 0 001.227 1.673 6.109 6.109 0 001.3.97 12.276 12.276 0 011.372-2.57zM27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-2.338 14.312l-4.128-4.128a.5.5 0 010-.707l1.036-1.036a.5.5 0 01.707 0l2.731 2.731 6.106-6.106a.5.5 0 01.707 0l1.043 1.043a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.702-.004z"}})])
          )
        }
      }
    