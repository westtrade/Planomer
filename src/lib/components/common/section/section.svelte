<div
	class="bg-white max-h-full rounded-[10px] py-4 px-7 overflow-auto h-full flex flex-col gap-[18px]"
>
	<header class="flex flex-row items-center">
		{#if $$slots.title}
			<h1 class="font-bold text-[24px] text-[#030229] w-full grow">
				<slot name="title" />
			</h1>
		{/if}

		{#if $$slots.headerPostfix}
			<!-- content here -->
			<div class="mx-left shrink-0">
				<slot name="headerPostfix" />
			</div>
		{/if}
	</header>

	<slot />
</div>
