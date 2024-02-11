<script lang="ts">
	import DropdownIndicator from '../common/dropdown-indicator.svelte';
	import FlyMenu from '../common/fly-menu.svelte';

	export let placeholder: string = '';
	export let label: string;
	export let name = '';
	export let value: string;
	export let items: SelectOption[] = [];

	let id = `field-${name}`;

	let selectedItemLabel = 'Генподрядчик';

	$: {
		selectedItemLabel = items.find((item) => item.value === value)?.label || placeholder;
	}
</script>

<div class="flex flex-col">
	<label class="block mb-2 text-sm font-medium text-gray-700" for={id}>
		{label}
	</label>

	<div
		class="relative
			h-[56px] w-full

	"
	>
		<FlyMenu class="w-full flex flex-row" trigger="click">
			<svelte:fragment slot="activator" let:showMenu>
				<div
					class=" leading-[56px] h-[56px] w-full
			bg-[#F7F7F8]
			text-gray-900 text-xs
			rounded-lg
			outline-none
			focus:ring-blue-500 focus:border-blue-500
			 pl-[20px]
			cursor-pointer
			flex items-center justify-between
			text-[#030229] text-opacity-70 font-normal

			 "
				>
					{selectedItemLabel}
					<DropdownIndicator active={showMenu} class="ml-auto" />
				</div>
			</svelte:fragment>
			<div class="flex flex-col w-[136px] gap-[5px]">
				{#each items as item}
					<div
						class="flex flex-row leading-[27px] px-[12.72px] w-full text-[10px] font-normal items-center gap-[7px] cursor-pointer text-xs"
						on:click={() => {
							value = item.value;
						}}
					>
						{item.label}
					</div>
				{/each}
			</div>
		</FlyMenu>
	</div>
</div>
