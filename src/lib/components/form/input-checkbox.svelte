<script lang="ts">
	export let label: string;
	export let name = '';
	export let value: string;

	let id = `field-${name}`;

	// your script goes here
</script>

<label for={id} class="flex flex-row gap-[10px] items-start relative cursor-pointer">
	<div class="relative w-[15px] h-[15px] grow-0 shrink-0 top-[5px]">
		<input type="checkbox" {name} {id} bind:value class="opacity-0 peer absolute" />

		<div
			class="
        w-[15px] h-[15px] border border-[#030229] grow-0 shrink-0 rounded-[2px]
        "
		></div>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="13px"
			height="13px"
			viewBox="0 0 24 24"
			class="peer-checked:opacity-100 opacity-0 absolute top-[.8px] left-[1px] fill-[#030229]"
		>
			<path
				fill="currentColor"
				d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
			/>
		</svg>
	</div>
	<span class="block">
		<slot name="label" />
	</span>
</label>
