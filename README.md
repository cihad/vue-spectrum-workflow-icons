# vue-spectrum-workflow-icons

This library is auto generated from `@adobe/spectrum-css-workflow-icons`. You can view all icons from [spectrum.adobe.com/page/icons](https://spectrum.adobe.com/page/icons/)

For use these icons your Vue app:

Firstly install the package:

`npm install vue-spectrum-workflow-icons`
or
`yarn add vue-spectrum-workflow-icons`

Then you can use:

```html
<template>
	<div>
		<beaker />
	</div>
</template>

<script>
import Beaker from 'vue-spectrum-workflow-icons/dist/Beaker'

export default {
	components: { Beader }
}
</script>
```

That's all. If you wish you can create wrap an `Icon` component for don't repeat yourself.

`Icon.vue` file:

```html
<template>
	<component
		:is="icon"
		class="spectrum-Icon"
		:class="[sizeClass]"
		:height="null"
		:width="null"
		viewBox='0 0 36 36'
	/>
</template>

<script>
const iconSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default {
	props: {
		icon: {
			required: true
		},
		size: {
			type: String,
			default: 'M',
			validator(value) {
				return iconSizes.indexOf(value) !== -1
			}
		}
	},
	computed: {
		sizeClass() {
			return 'spectrum-Icon--size' + this.size
		}
	}
}
</script>

<style>
@import "~@spectrum-css/icon/dist/index-vars.css";
</style>
```

And than:

```html
<template>
	<div>
		<icon :icon="Beaker" />
	</div>
</template>

<script>
import Beader from 'vue-spectrum-workflow-icons/dist/Beaker.js'

export default {
	data() {
		return {
			Beaker
		}
	}
}
</script>
```

It's tried. Works fine. Enjoy it.