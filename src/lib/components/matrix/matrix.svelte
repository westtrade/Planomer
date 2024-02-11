<script lang="ts">
	import { createEventDispatcher, type ComponentType } from 'svelte';

	export let xLabels: string[] = [];
	export let yLabels: string[] = [];
	export let values: { id: string; label: string; component?: ComponentType }[][] = [];
	export let cellComponent: ComponentType | undefined = undefined;

	const dispatch = createEventDispatcher();
</script>

<table class="border-separate border-spacing-2 text-sm">
	<thead>
		<tr>
			{#if yLabels.length > 0}
				<th />
			{/if}
			{#each xLabels as label}
				<th class="w-[33px] h-[33px] text-center">
					{label}
				</th>
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each values as row, indexY}
			<tr>
				{#if yLabels.length > 0}
					<td class="w-[33px] h-[33px] text-center">
						{yLabels[index] || '-'}
					</td>
				{/if}

				{#each row as col, indexX}
					<td class="w-[45px] h-[45px]">
						{#if col.component}
							<svelte:component
								this={col.component}
								{...col}
								on:click={() => {
									dispatch('select', col);
								}}
							/>
						{:else if cellComponent}
							<svelte:component
								this={cellComponent}
								{...col}
								on:click={() => {
									dispatch('select', col);
								}}
							/>
						{:else}
							{col.label}
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
