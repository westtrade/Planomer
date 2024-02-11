<script lang="ts">
	import { page } from '$app/stores';
	import { isActive } from '$lib/aliases';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import BuildingIcon from '$lib/components/icons/building-icon.svelte';

	const currentObject = getContext<Writable<BuildingObject>>('current-object');
</script>

<div class="py-[30px] px-[54px] h-full flex flex-col gap-6">
	<div class="flex flex-row justify-between">
		<nav class="flex flex-row gap-[62px] font-bold">
			<a
				class:active={isActive($page.route.id, 'dashboard', true)}
				class="text-black text-opacity-50 text-sm"
				href="/dashboard">Шахматка</a
			>
			<a
				class:active={isActive($page.route.id, 'dashboard.conveyor')}
				class="text-black text-opacity-50 text-sm"
				href="/dashboard/conveyor">Конвеер</a
			>
			<a
				class:active={isActive($page.route.id, 'dashboard.progress')}
				class="text-black text-opacity-50 text-sm"
				href="/dashboard/progress">Прогресс</a
			>
			<a
				class:active={isActive($page.route.id, 'dashboard.tasks')}
				class="text-black text-opacity-50 text-sm"
				href="/dashboard/tasks">Задачи</a
			>
		</nav>

		<div class="flex flex-row gap-1 items-center">
			<BuildingIcon />

			<span class="text-black font-bold">
				{$currentObject.title}
			</span>
		</div>
	</div>

	<slot />
</div>

<style>
	.active {
		@apply text-[#605BFF] text-opacity-100;
	}
</style>
