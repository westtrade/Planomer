<div class="bg-white rounded-[10px] px-7">
	<header class="flex flex-row items-center">
		{#if $$slots.default}
			<h1 class="font-bold text-[24px] text-[#030229] w-full grow">
				<slot />
			</h1>
		{/if}

		{#if $$slots.headerPostfix}
			<!-- content here -->
			<div class="mx-left shrink-0">
				<slot name="headerPostfix" />
			</div>
		{/if}
	</header>
</div>
