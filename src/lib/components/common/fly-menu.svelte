<script lang="ts">
	import { fly } from 'svelte/transition';
	import MenuIcon from '../icons/menu-icon.svelte';

	import { createPopperActions } from 'svelte-popperjs';

	export let trigger: 'click' | 'hover' = 'hover';
	const [popperRef, popperContent] = createPopperActions({
		placement: 'bottom',
		strategy: 'absolute'
	});

	const combinedActions = (node: HTMLElement) => {
		const destructors = [
			fly(node, {}),
			popperContent(node, {
				modifiers: []
			})
		];

		return {
			destroy() {
				destructors.forEach((destructor) => {
					if (typeof destructor?.destroy == 'function') destructor.destroy();
				});
			}
		};
	};

	export let showMenu = false;

	let className: string = '';
	export { className as class };
</script>

<div
	class={`relative select-none ${className}`}
	on:mouseenter={() => {
		if (trigger === 'hover') {
			showMenu = true;
		}
	}}
	on:click={() => {
		if (trigger === 'click') {
			showMenu = true;
		}
	}}
	on:mouseleave={() => (showMenu = false)}
	on:focus|capture={() => (showMenu = true)}
	on:blur|capture={() => (showMenu = false)}
>
	<div
		use:popperRef
		class={`
		w-full grow
    min-w-6 min-h-6 w-full
    flex items-center justify-center
    ${showMenu ? 'fill-[#605BFF]' : 'fill-[#030229]'}`}
	>
		<slot name="activator" {showMenu}>Activator</slot>
	</div>
	{#if showMenu}
		<div
			use:combinedActions
			class="px-3 py-[10px] shadow-lg bg-white rounded-[10px]
            absolute left-0 top-0 z-30
			min-w-full
    "
		>
			<slot />
		</div>
	{/if}
</div>
