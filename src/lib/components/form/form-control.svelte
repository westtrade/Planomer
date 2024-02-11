<script lang="ts">
	export let label: string;
	export let name = '';
	export let value: string;

	export let type: 'text' | 'password' = 'text';

	let id = `field-${name}`;
</script>

<div class="flex flex-col">
	<label class="block mb-2 text-sm font-medium text-gray-700" for={id}>
		{label}
	</label>

	{#if type === 'text'}
		<input
			{id}
			{name}
			class="
			leading-[18px]
			py-[19px] px-[20px]
			bg-[#F7F7F8]
			text-gray-900 text-xs
			rounded-lg
			outline-none
			focus:ring-blue-500 focus:border-blue-500
			 block w-full
			 placeholder:text-[#030229] placeholder:text-opacity-70
			 "
			bind:value
			type="text"
		/>
	{:else if type === 'password'}
		<input
			{id}
			{name}
			class="
			leading-[18px]
			py-[19px] px-[20px]


			bg-[#F7F7F8]
			text-gray-900 text-xs
			rounded-lg
			outline-none
			focus:ring-blue-500 focus:border-blue-500
			 block w-full
			 placeholder:text-[#030229] placeholder:text-opacity-70
			 "
			bind:value
			type="password"
		/>
	{:else}
		<!-- else content here -->
	{/if}
</div>
