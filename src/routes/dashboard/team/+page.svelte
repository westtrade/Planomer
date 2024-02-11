<script lang="ts">
	import Avatar from '$lib/components/common/avatar.svelte';
	import Chips from '$lib/components/common/chips.svelte';
	import DropdownIndicator from '$lib/components/common/dropdown-indicator.svelte';
	import FlyMenu from '$lib/components/common/fly-menu.svelte';
	import MenuIcon from '$lib/components/icons/menu-icon.svelte';
	import PlusIcon from '$lib/components/icons/plus-icon.svelte';
	import EditIcon from '$lib/components/icons/edit-icon.svelte';
	import DeleteIcon from '$lib/components/icons/delete-icon.svelte';
	import SideModal from '$lib/components/common/side-modal.svelte';
	import AvatarUpload from '$lib/components/form/avatar-upload.svelte';
	import FormControl from '$lib/components/form/form-control.svelte';
	import FormSelect from '$lib/components/form/form-select.svelte';

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

	let showModal = false;
</script>

<svelte:head>
	<title>Команда - Планомер</title>
</svelte:head>

<div class="flex flex-col gap-[30px] relative h-full px-[54px] pt-12">
	<div class="flex flex-row justify-between items-center">
		<div class="text-[#030229] font-bold text-2xl">Команда</div>

		<div>
			<button
				class="button button-primary w-auto"
				on:click={() => {
					showModal = true;
				}}
			>
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
				<tr class="leading-[60px] hover:shadow-2xl rounded-[5px] transition">
					<td class="px-4 py-2">
						<div class="flex flex-row items-center gap-2">
							<Avatar
								class="w-[30px] h-[30px]"
								fullRounded
								src={`https://randomuser.me/api/portraits/men/${getRandomInt(0, 100)}.jpg`}
							/>
							{employee.name}
						</div>
					</td>
					<td class="px-4 py-2">
						{employee.email}
					</td>
					<td class="px-4 py-2">
						{employee.phone_number}
					</td>
					<td class="px-4 py-2">
						{#if employee.role === 'subcontractor'}
							<Chips class="bg-[#FF8F6B] bg-opacity-10">Подрядчик</Chips>
						{:else}
							<Chips class="bg-[#5B93FF] bg-opacity-10">Генподрядчик</Chips>
						{/if}
					</td>
					<td class="px-4 py-2">
						<FlyMenu>
							<svelte:fragment slot="activator">
								<MenuIcon />
							</svelte:fragment>
							<div class="flex flex-col w-[136px] gap-[5px]">
								<!--
	text-[#5B93FF] text-opacity-80 hover:text-opacity-100
									bg-[#5B93FF] bg-opacity-5 hover:bg-opacity-20

								 -->
								<div
									class="flex flex-row items-center gap-[7px]
									px-[12.72px] w-full rounded-[5px]
									leading-[27px] text-[10px] font-normal
								 	button-primary-dimmed
									cursor-pointer

									"
									on:click={() => {
										showModal = true;
									}}
								>
									<EditIcon />
									Edit
								</div>
								<!--
text-[#E71D36] text-opacity-80 hover:text-opacity-100
									 bg-[#E71D36] bg-opacity-5 hover:bg-opacity-20

								 -->
								<div
									class="
									flex flex-row items-center gap-[7px]
									px-[12.72px] w-full rounded-[5px]
									leading-[27px] text-[10px] font-normal


									 button-danger-dimmed
									cursor-pointer

									"
								>
									<DeleteIcon />
									Delete
								</div>
							</div>
						</FlyMenu>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<SideModal on:close={() => (showModal = false)} show={showModal}>
		<svelte:fragment slot="title">Добавить участника</svelte:fragment>

		<form class="flex flex-col gap-[18px] h-full" action="" method="post">
			<AvatarUpload />

			<FormControl label="Email" name="email" />
			<FormSelect
				label="Роль"
				name="role"
				items={[
					{ label: 'Подрядчик', value: 'general_contractor' },
					{ label: 'Генподрядчик', value: 'subcontractor' }
				]}
			/>

			<button class="button button-primary mt-auto"> Отправить приглашение </button>
		</form>
	</SideModal>
</div>
