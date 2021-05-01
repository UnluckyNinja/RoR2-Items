<template>
	<button class="filter mr-2 p-1 rounded-md" :class="cssClass" @click.prevent="select">
		{{ t(`ui.button.${name.toLowerCase()}`) }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	props: {
		selected: { type: [String, Number], required: true },
		rarity: { type: [String, Number], required: true },
		name: { type: String, required: true },
	},
	setup(){
		const { t } = useI18n({ useScope: 'global' });

		return { t };
	},
	methods: {
		select() {
			this.$emit('selectRarity', this.rarity);
		},
	},
	computed: {
		cssClass(): string[] {
			const classes = [this.name.toLowerCase()];
			if (this.selected == this.rarity) classes.push('active');
			return classes;
		},
	},
});
</script>

<style scoped>
.filter {
	min-width: 4rem;
}
</style>
