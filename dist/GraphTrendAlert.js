
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
            children.concat([_c('path',{attrs:{"d":"M35 33.809l-8.659-17.158a1.5 1.5 0 00-2.678 0L15 33.809A1.55 1.55 0 0016.407 36h17.186A1.55 1.55 0 0035 33.809zM24.5 20h1a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5zm1.491 12.4h-1.982a.409.409 0 01-.409-.409v-1.982a.409.409 0 01.409-.409h1.982a.409.409 0 01.409.409v1.983a.409.409 0 01-.409.408zm7.103-30.339l-7.74 10.815a4.423 4.423 0 013.423 2.074l5.133-7.334A.5.5 0 0034 7.33V2.352a.5.5 0 00-.906-.291zM19.978 5.374l-5.45 14.992-4.081-4.082a.5.5 0 00-.674-.031L2.18 22.579a.5.5 0 00-.18.384v4.188a.5.5 0 00.829.377l7.048-6.157 5.343 5.342 4.48-8.871 1.532-2.9a4.425 4.425 0 013.438-2.067l-3.775-7.554a.5.5 0 00-.917.053z"}})])
          )
        }
      }
    