<script lang="ts">
	import Avatar from '$lib/components/common/avatar.svelte';
	import Chips from '$lib/components/common/chips.svelte';
	import DropdownIndicator from '$lib/components/common/dropdown-indicator.svelte';
	import MenuIcon from '$lib/components/icons/menu-icon.svelte';
	import PlusIcon from '$lib/components/icons/plus-icon.svelte';

	const employees: Employees = [
		{
			name: 'John Doe',
			email: 'johndoe2211@gmail.com',
			phone_number: '+33757005467',
			role: ''
		},
		{
			name: 'Shelby Goode',
			email: 'shelbygoode481@gmail.com',
			phone_number: '+33757005467',
			role: 'general_contractor'
		},
		{
			name: 'Robert Bacins',
			email: 'robertbacins4182@.com',
			phone_number: '+33757005467',
			role: 'subcontractor'
		},
		{
			name: 'John Carilo',
			email: 'john carilo182@.com',
			phone_number: '+3375805467',
			role: 'subcontractor'
		},
		{
			name: 'Adriene Watson',
			email: 'adrienewatson82@.com',
			phone_number: '+83757305467',
			role: 'general_contractor'
		},
		{
			name: 'Jhon Deo',
			email: 'jhondeo24823@.com',
			phone_number: '+63475700546',
			role: 'subcontractor'
		},
		{
			name: 'Mark Ruffalo',
			email: 'markruffalo3735@.com',
			phone_number: '+33757005467',
			role: 'subcontractor'
		}
	];

	function getRandomInt(min: number, max: number): number {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
</script>

<svelte:head>
	<title>Команда - Планомер</title>
</svelte:head>

<div class="flex flex-col gap-[30px]">
	<div class="flex flex-row justify-between items-center">
		<div class="text-[#030229] font-bold text-2xl">Команда</div>

		<div>
			<button class="button button-primary w-auto">
				<PlusIcon />

				Пригласить в команду
			</button>
		</div>
	</div>

	<table class="table-auto w-full">
		<thead>
			<tr>
				<th class="px-4 py-2 text-left cursor-pointer">
					Имя

					<div class="float-right">
						<DropdownIndicator />
					</div>
				</th>
				<th class="px-4 py-2 text-left cursor-pointer"
					>Email
					<div class="float-right">
						<DropdownIndicator />
					</div>
				</th>
				<th class="px-4 py-2 text-left cursor-pointer"
					>Номер телефона
					<div class="float-right">
						<DropdownIndicator />
					</div>
				</th>
				<th class="px-4 py-2 text-left cursor-pointer"
					>Роль
					<div class="float-right">
						<DropdownIndicator />
					</div>
				</th>
				<th class="px-4 py-2 text-left"></th>
			</tr>
		</thead>
		<tbody>
			{#each employees as employee}
				<tr>
					<td class="px-4 py-2 border-t border-gray-200">
						<div class="flex flex-row items-center gap-2">
							<Avatar
								fullRounded
								src={`https://randomuser.me/api/portraits/men/${getRandomInt(0, 100)}.jpg`}
							/>
							{employee.name}
						</div>
					</td>
					<td class="px-4 py-2 border-t border-gray-200">
						{employee.email}
					</td>
					<td class="px-4 py-2 border-t border-gray-200">
						{employee.phone_number}
					</td>
					<td class="px-4 py-2 border-t border-gray-200">
						{#if employee.role === 'subcontractor'}
							<Chips class="bg-[#FF8F6B] bg-opacity-10">Подрядчик</Chips>
						{:else}
							<Chips class="bg-[#5B93FF] bg-opacity-10">Генподрядчик</Chips>
						{/if}
					</td>
					<td class="px-4 py-2 border-t border-gray-200">
						<button>
							<MenuIcon />
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
