<div class="flex flex-row h-dvh">
	<div
		class="
        flex flex-col items-center
        bg-white w-[448px]
        px-[50px]
        shrink-0 grow-0
    "
	>
		<slot name="sidebar" />
	</div>
	<div class="flex flex-col w-full relative">
		<slot />
	</div>
</div>
