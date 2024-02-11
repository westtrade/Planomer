<script lang="ts">
	import { page } from '$app/stores';
	import { isActive } from '$lib/aliases';
	import Logo from '../common/logo.svelte';
	import SidebarDropdownItem from '../common/sidebar-dropdown-item.svelte';
	import UserInfo from '../common/user-info.svelte';
	import CheckerBoardIcon from '../icons/checker-board-icon.svelte';
	import SettingsIcon from '../icons/settings-icon.svelte';
</script>

<div class="flex flex-row h-dvh">
	<aside
		class="
        w-[215px] pt-[39px] px-[15px] pb-[54px]
        flex flex-col
        h-full
        border-r border-[#DADADA]
    "
	>
		<div class="mb-[47px] flex items-start">
			<a href="/" class="relative -left-[4px]">
				<Logo size={59} />
			</a>
		</div>

		<nav class="flex flex-col gap-8 mb-auto text-[#030229] text-opacity-50">
			<a href="/dashboard" class="flex flex-row gap-4 leading-[21px] items-center h-5">
				<CheckerBoardIcon />
				Шахматка
			</a>
			<SidebarDropdownItem sectionIsActive={isActive($page.route.id, 'dashboard')}>
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
					class:active={isActive($page.route.id, 'dashboard.team')}
				>
					Команда
				</a>
			</SidebarDropdownItem>
		</nav>

		<UserInfo name="Дмитрий В" organization="ООО “Подрядчик”" />
	</aside>

	<main class="px-[54px] pt-12 w-full min-w-0 shrink grow">
		<slot />
	</main>
</div>

<style>
	.active {
		@apply text-[#605BFF];
	}
</style>
