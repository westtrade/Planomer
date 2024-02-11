<script lang="ts">
	export let label: string;
	export let complete: number = 0;
	export let active: boolean = true;
</script>

<div
	class="
    flex flex-col items-center justify-center
    w-full h-full text-center
    border border-[#605BFF] text-[#605BFF] text-opacity-70 rounded-[2px]
    cursor-pointer
    "
	class:opacity-0={!active}
	class:complete-full={complete === 100}
	on:click
>
	<!-- {label} -->

	<div class="h-1/2 text-xs">
		{#if complete > 0 && complete < 100}
			{complete}%
		{:else}
			&nbsp;
		{/if}
	</div>

	<div class="h-1/2 text-xs">&nbsp;</div>
</div>

<style>
	.complete-full {
		@apply bg-[#605BFF] text-white;
	}
</style>
