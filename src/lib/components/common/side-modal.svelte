<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseIcon from '$lib/components/icons/close-icon.svelte';

	export let show: boolean = true;

	const dispatch = createEventDispatcher();
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.code === 'Escape') {
			dispatch('close');
		}
	}}
/>

<button
	class="absolute left-0 top-0 right-0 bottom-0
    bg-[#B3B3BF] bg-opacity-30
    cursor-pointer
	transition-all
"
	class:closed-backgrdop={!show}
	on:click={() => {
		dispatch('close');
	}}
></button>

<aside
	class="
	absolute right-0 top-[18px] bottom-[18px] max-w-[400px] w-full z-30 rounded-l-[10px]
	flex flex-col
	bg-white
	transition-all duration-300 overflow-hidden"
	class:closed-modal={!show}
>
	<div class="p-[30px] flex flex-col h-full grow">
		<header class="flex flex-row mb-[50px] items-center">
			{#if $$slots.title}
				<div class="text-[20px] font-normal text-nowrap">
					<slot name="title" />
				</div>
			{/if}

			<button
				on:click={() => {
					dispatch('close');
				}}
				class="
            w-10 h-10 flex items-center ml-auto rounded-full
            cursor-pointer
            transition

				button-danger-dimmed
			"
			>
				<CloseIcon />
			</button>
		</header>

		<slot />
	</div>
</aside>

<style lang="pcss">
	.closed-backgrdop {
		@apply opacity-0 pointer-events-none;
	}

	.closed-modal {
		@apply max-w-0 pointer-events-none;
	}
</style>
