<script>
	import Section from '$lib/components/common/section/section.svelte';
	import GripIcon from '$lib/components/icons/grip-icon.svelte';
	import PlusIcon from '$lib/components/icons/plus-icon.svelte';
	import SublayoutCheckers from '$lib/components/layouts/sublayout-checkers.svelte';
	import TableSortableBody from '$lib/components/common/table/table-sortable-body.svelte';
	import EditIcon from '$lib/components/icons/edit-icon.svelte';
	import DeleteIcon from '$lib/components/icons/delete-icon.svelte';
	import SectionHead from '$lib/components/common/section/section-head.svelte';
	import Matrix from '$lib/components/matrix/matrix.svelte';
	import StructureCell from '$lib/components/matrix/structure-cell.svelte';

	import { subDays } from 'date-fns/subDays';
	import TableWrapper from '$lib/components/common/table/table-wrapper.svelte';
	import SideModal from '$lib/components/common/side-modal.svelte';

	let showModal = false;

	let tableData = [
		{
			id: '01HPCS52NWW3W9MRNPV04JV2K0',
			full: 'Секция 1',
			short: 'c1'
		},
		{
			id: '02HPCS52NWW3W9MRNPV04JV2K1',
			full: 'Секция 2',
			short: 'c2'
		},
		{
			id: '03HPCS52NWW3W9MRNPV04JV2K2',
			full: 'Секция 3',
			short: 'c3'
		},
		{
			id: '04HPCS52NWW3W9MRNPV04JV2K3',
			full: 'Секция 4',
			short: 'c4'
		},
		{
			id: '05HPCS52NWW3W9MRNPV04JV2K4',
			full: 'Секция 5',
			short: 'c5'
		},
		{
			id: '06HPCS52NWW3W9MRNPV04JV2K5',
			full: 'Секция 6',
			short: 'c6'
		},
		{
			id: '07HPCS52NWW3W9MRNPV04JV2K6',
			full: 'Секция 7',
			short: 'c7'
		},
		{
			id: '08HPCS52NWW3W9MRNPV04JV2K7',
			full: 'Секция 8',
			short: 'c8'
		},
		{
			id: '09HPCS52NWW3W9MRNPV04JV2K8',
			full: 'Секция 9',
			short: 'c9'
		},
		{
			id: '10HPCS52NWW3W9MRNPV04JV2K9',
			full: 'Секция 10',
			short: 'c10'
		}
	];

	const exampleMatrix = [
		[
			{
				id: '65c93c5cf50771a2100a951f',
				label: 'эт30',
				active: false
			},
			{
				id: '65c93c5ce3277cc7e213ba3c',
				label: 'эт27',
				startedAt: subDays(new Date(), 5),
				endedAt: subDays(new Date(), -5)
			},
			{
				id: '65c93c5cda708851337420ed',
				label: 'эт25',
				complete: 100
			},
			{
				id: '65c93c5c64cb2eb84ffcc875',
				label: 'эт33',
				complete: 10
			}
		],
		[
			{
				id: '65c93c5cd8dc29a684c7f727',
				label: 'эт38'
			},
			{
				id: '65c93c5ca0372a9a4bdb6cf9',
				label: 'эт36'
			},
			{
				id: '65c93c5c72ad1e0931c8634b',
				label: 'эт20'
			},
			{
				id: '65c93c5cb41d2a0aa6a6a909',
				label: 'эт36'
			}
		],
		[
			{
				id: '65c93c5c118c872d6adbac1c',
				label: 'эт31'
			},
			{
				id: '65c93c5c9b7d6d5f1ea1fc10',
				label: 'эт35'
			},
			{
				id: '65c93c5c7b99c2a87948ab8b',
				label: 'эт37'
			},
			{
				id: '65c93c5cd0705deab12c07af',
				label: 'эт28'
			}
		],
		[
			{
				id: '65c93c5c879cf6d64dd80933',
				label: 'эт24'
			},
			{
				id: '65c93c5c47ebe56ca0257fa5',
				label: 'эт27'
			},
			{
				id: '65c93c5ceac98558d4f0e985',
				label: 'эт39'
			},
			{
				id: '65c93c5c73100de3a8d9119a',
				label: 'эт32'
			}
		],
		[
			{
				id: '65c93c5c4a6f5087f74abf5b',
				label: 'эт32'
			},
			{
				id: '65c93c5cf4c16a868ed71d36',
				label: 'эт30'
			},
			{
				id: '65c93c5cf3d189a5d28575f5',
				label: 'эт31'
			},
			{
				id: '65c93c5cf39d2588a62f826f',
				label: 'эт40'
			}
		],
		[
			{
				id: '65c93c5cc97944df17721167',
				label: 'эт23'
			},
			{
				id: '65c93c5ceed3ccaaaf63dc90',
				label: 'эт34'
			},
			{
				id: '65c93c5c3c14110aba331d30',
				label: 'эт36'
			},
			{
				id: '65c93c5c39dc433720debd14',
				label: 'эт27'
			}
		],
		[
			{
				id: '65c93c5c0cb4ec091706942d',
				label: 'эт25'
			},
			{
				id: '65c93c5c2cdd4a0083db82bf',
				label: 'эт31'
			},
			{
				id: '65c93c5c3d0a0a8f8393eb79',
				label: 'эт36'
			},
			{
				id: '65c93c5cc1f2c161c7103647',
				label: 'эт36'
			}
		]
	];
</script>

<SublayoutCheckers>
	<div class="grid grid-cols-2 gap-5 h-full">
		<Section>
			<svelte:fragment slot="title">Секции</svelte:fragment>
			<svelte:fragment slot="headerPostfix">
				<button class="button button-primary-outline"> <PlusIcon /> Новая секция </button>
			</svelte:fragment>

			<TableWrapper>
				<table class="w-full text-sm relative">
					<thead>
						<tr>
							<th class="sticky bg-white top-0 px-4 py-2 text-left"> </th>
							<th class="sticky bg-white top-0 px-4 py-2 text-left">Полное название</th>
							<th class="sticky bg-white top-0 px-4 py-2 text-left">Краткое название</th>
							<th class="sticky bg-white top-0 px-4 py-2"></th>
						</tr>
					</thead>
					<TableSortableBody>
						{#each tableData as item}
							<tr>
								<td class="px-4 py-2 flex items-center gap-2 text-[#D9D9D9] cursor-pointer grip">
									<GripIcon />
								</td>
								<td class="px-4 py-2">{item.full}</td>
								<td class="px-4 py-2">{item.short}</td>
								<td class="px-4 py-2 flex items-end gap-2">
									<button class="button-circle button-primary-dimmed">
										<EditIcon />
									</button>

									<button class="button-circle button-danger-dimmed">
										<DeleteIcon />
									</button>
								</td>
							</tr>
						{/each}
					</TableSortableBody>
				</table>
			</TableWrapper>

			<SectionHead>
				Этажи

				<svelte:fragment slot="headerPostfix">
					<button class="button button-primary-outline"> <PlusIcon />Новый этаж </button>
				</svelte:fragment>
			</SectionHead>

			<TableWrapper>
				<table class="w-full text-sm">
					<thead>
						<tr>
							<th class="sticky bg-white top-0 px-4 py-2 text-left"> </th>
							<th class="sticky bg-white top-0 px-4 py-2 text-left">Полное название</th>
							<th class="sticky bg-white top-0 px-4 py-2 text-left">Краткое название</th>
							<th class="sticky bg-white top-0 px-4 py-2"></th>
						</tr>
					</thead>
					<TableSortableBody>
						{#each tableData as item}
							<tr>
								<td class="px-4 py-2 flex items-center gap-2 text-[#D9D9D9] cursor-pointer grip">
									<GripIcon />
								</td>
								<td class="px-4 py-2">{item.full}</td>
								<td class="px-4 py-2">{item.short}</td>
								<td class="px-4 py-2 flex items-end gap-2">
									<button class="button-circle button-primary-dimmed">
										<EditIcon />
									</button>

									<button class="button-circle button-danger-dimmed">
										<DeleteIcon />
									</button>
								</td>
							</tr>
						{/each}
					</TableSortableBody>
				</table>
			</TableWrapper>
		</Section>
		<Section>
			<svelte:fragment slot="title">Структура объекта</svelte:fragment>
			<svelte:fragment slot="headerPostfix">
				<button class="button button-primary-outline"> <PlusIcon /> Новый корпус </button>
			</svelte:fragment>

			<TableWrapper>
				<table class="w-full text-sm">
					<TableSortableBody>
						{#each tableData as item}
							<tr>
								<table class="w-full">
									<tr>
										<td
											class="px-4 py-2 flex items-center gap-2 text-[#D9D9D9] cursor-pointer grip max-w-10"
										>
											<GripIcon />
										</td>
										<td class="px-4 py-2 text-left w-full">{item.short}</td>
										<td class="px-4 py-2 flex items-end gap-2">
											<button class="button-circle button-primary-dimmed">
												<EditIcon />
											</button>

											<button class="button-circle button-danger-dimmed">
												<DeleteIcon />
											</button>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<Matrix
												xLabels={['c1', 'c2', 'c3', 'c4']}
												values={exampleMatrix}
												cellComponent={StructureCell}
												on:select={() => {
													showModal = true;
												}}
											></Matrix>
										</td>
									</tr>
								</table>
							</tr>
						{/each}
					</TableSortableBody>
				</table>
			</TableWrapper>
		</Section>
	</div>

	<SideModal on:close={() => (showModal = false)} show={showModal}>
		<svelte:fragment slot="title">Каркас подвесного потолка</svelte:fragment>

		<form class="flex flex-col gap-[18px] h-full" action="" method="post">
			<!-- <FormControl label="Email" name="email" />
			<FormSelect
				label="Роль"
				name="role"
				items={[
					{ label: 'Подрядчик', value: 'general_contractor' },
					{ label: 'Генподрядчик', value: 'subcontractor' }
				]}
			/> -->

			<button class="button button-primary mt-auto">Сохранить</button>
		</form>
	</SideModal>
</SublayoutCheckers>
