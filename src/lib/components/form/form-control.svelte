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
			class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
			bind:value
			type="text"
		/>
	{:else if type === 'password'}
		<input
			{id}
			{name}
			class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
			bind:value
			type="password"
		/>
	{:else}
		<!-- else content here -->
	{/if}
</div>
