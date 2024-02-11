<script lang="ts">
	import { page } from '$app/stores';
	import { isActive } from '$lib/aliases';
	import { writable } from 'svelte/store';
	import { classList } from '../actions/classList';
	import FlyMenu from '../common/fly-menu.svelte';
	import Logo from '../common/logo.svelte';
	import SidebarDropdownItem from '../common/sidebar-dropdown-item.svelte';
	import UserInfo from '../common/user-info.svelte';
	import CheckerBoardIcon from '../icons/checker-board-icon.svelte';
	import MenuIcon from '../icons/menu-icon.svelte';
	import SettingsIcon from '../icons/settings-icon.svelte';
	import { setContext } from 'svelte';

	const buildingObjects: BuildingObjects = [
		{
			id: '01HPCJHSXAJRVMK0WFYVAVKTP6',
			title: ' Восьмиэтажка на ул. Правды',

			created_at: Date.now()
		},

		{
			id: '01HPCJK99KRS4V3JB8XZBE5QT2',
			title: 'Жилой дом 1. Невский просп., 1',
			created_at: Date.now()
		},

		{
			id: '01HPCJMD12RF12WRJGVS8073KN',
			title: 'Малоэтажка',
			created_at: Date.now()
		},
		{
			id: '01HPCJMD12RF12WRJGVS8073KN',
			title: 'Объект ул. Мира, 2',
			created_at: Date.now()
		}
	];

	const currentObject = writable(buildingObjects.at(0));

	setContext('current-object', currentObject);
</script>

<div class="flex flex-row h-dvh">
	<aside
		class="
        w-[218px] pt-[39px] px-[15px] pb-[54px]
        flex flex-col
        h-full
        border-r border-[#DADADA] bg-white
    "
	>
		<div class="mb-[47px] flex items-start">
			<a href="/" class="relative -left-[4px]">
				<Logo size={59} />
			</a>
		</div>

		<div class="mb-8">
			<FlyMenu>
				<svelte:fragment slot="activator">
					<div
						class="
			w-full min-h-[14px] p-[11px] rounded-lg
			bg-[#F7F7F8] text-[#000000] cursor-pointer
			flex items-center
			text-[14px]
		"
					>
						<div class="grow w-full">
							{$currentObject?.title}
						</div>

						<div class="rotate-90 w-6 h-6 shrink-0 grow-0 ml-auto">
							<MenuIcon />
						</div>
					</div>
				</svelte:fragment>

				{#each buildingObjects as build}
					<div
						class="flex flex-row leading-[27px] px-[12.72px] w-full text-[10px] font-normal items-center gap-[7px] cursor-pointer text-xs
							text-nowrap overflow-hidden text-ellipsis
						"
						class:font-bold={build.id === currentObject?.id}
						on:click={() => {
							currentObject.set({
								...build
							});
						}}
					>
						{build.title}
					</div>
				{/each}
			</FlyMenu>
		</div>
		<nav class="flex flex-col gap-8 mb-auto text-[#030229] text-opacity-50">
			<a
				href="/dashboard"
				class="flex flex-row gap-4 leading-[21px] items-center h-5"
				class:active={isActive($page.route.id, 'dashboard', true)}
			>
				<CheckerBoardIcon />
				Шахматка
			</a>

			<SidebarDropdownItem sectionIsActive={isActive($page.route.id, 'dashboard.settings.')}>
				<svelte:fragment slot="activator">
					<SettingsIcon />
					Настройки
				</svelte:fragment>

				<a href="/dashboard" class="flex flex-row gap-4 leading-[21px] items-center">
					Структура объекта
				</a>

				<a href="/dashboard" class="flex flex-row gap-4 leading-[21px] items-center">
					Привязка работ
				</a>

				<a
					href="/dashboard/team"
					class="flex flex-row gap-4 leading-[21px] items-center"
					class:active={isActive($page.route.id, 'dashboard.settings.team')}
				>
					Команда
				</a>
			</SidebarDropdownItem>
		</nav>

		<UserInfo name="Дмитрий В" organization="ООО “Подрядчик”" />
	</aside>

	<main class="w-full min-w-0 shrink grow relative">
		<slot />
	</main>
</div>

<style>
	.active {
		@apply text-[#605BFF];
	}
</style>
