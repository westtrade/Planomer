<script lang="ts">
	import Sortable from 'sortablejs';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	let bodyRef: HTMLElement;

	onMount(() => {
		var sortable = Sortable.create(bodyRef, {
			handle: '.grip',
			onChoose(event) {
				dispatch('choose', event);
			},
			onUnchoose(event) {
				dispatch('choose', event);
			},
			onStart(event) {
				dispatch('start', event);
			},
			onEnd(event) {
				dispatch('end', event);
			},
			onAdd(event) {
				dispatch('add', event);
			},
			onUpdate(event) {
				dispatch('update', event);
			},
			onSort(event) {
				dispatch('sort', event);
			},
			onRemove(event) {
				dispatch('remove', event);
			},
			onFilter(event) {
				dispatch('filter', event);
			},

			onMove(event) {
				dispatch('move', event);
			},

			onClone(event) {
				dispatch('clone', event);
			},

			onChange(event) {
				dispatch('change', event);
			}
		});
	});
</script>

<tbody bind:this={bodyRef}>
	<slot />
</tbody>
