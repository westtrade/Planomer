<script lang="ts">
	import DropdownIndicator from './dropdown-indicator.svelte';
	export let sectionIsActive: boolean = false;

	export let show: boolean = sectionIsActive;
</script>

<div class="flex flex-col">
	<button
		on:click|preventDefault={() => {
			show = !show;
		}}
		class="flex flex-row gap-4 h-[21px] mb-[17px] items-center cursor-pointer"
		class:active={sectionIsActive}
	>
		<slot name="activator" />

		<DropdownIndicator active={show} />
	</button>

	<div class="flex flex-col gap-[25px] pl-[38px] transition" class:close={!show}>
		<slot />
	</div>
</div>

<style>
	.close {
		@apply opacity-0 max-h-0;
	}

	.active {
		@apply text-[#605BFF];
	}
</style>
