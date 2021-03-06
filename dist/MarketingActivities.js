
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
            children.concat([_c('path',{attrs:{"d":"M25.865 6.9a4.853 4.853 0 01-1.508 1.315l3.91 4.729a4.859 4.859 0 011.559-1.253zm-16.85 8.869l4.268 3.386a4.843 4.843 0 011.312-1.512l-4.31-3.419a4.852 4.852 0 01-1.27 1.545zm12.71 3.4a4.79 4.79 0 01.584 1.928l5.623-2.473a4.809 4.809 0 01-.706-1.875zM7.042 28.255A4.851 4.851 0 018.3 29.809l5.88-4.791a4.864 4.864 0 01-1.152-1.641zM10.136 9.5a4.8 4.8 0 01.657 1.938L18.2 6.98a4.8 4.8 0 01-.89-1.8z"}}),_c('circle',{attrs:{"cx":"4","cy":"32","r":"3.85"}}),_c('circle',{attrs:{"cx":"17.5","cy":"21.5","r":"3.85"}}),_c('circle',{attrs:{"cx":"22","cy":"4","r":"3.85"}}),_c('circle',{attrs:{"cx":"6","cy":"12","r":"3.85"}}),_c('circle',{attrs:{"cx":"32","cy":"16","r":"3.85"}})])
          )
        }
      }
    