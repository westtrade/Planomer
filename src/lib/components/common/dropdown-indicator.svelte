<script lang="ts">
	import ArrowDownIcon from '../icons/arrow-down-icon.svelte';

	export let active: boolean = false;

	let className: string = '';
	export { className as class };
</script>

<div class={`w-6 h-6 flex items-center ${className}`}>
	<span class:rotate-180={active} class="transition-transform">
		<ArrowDownIcon />
	</span>
</div>
