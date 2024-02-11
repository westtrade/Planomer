<script>
	import Logo from '$lib/components/common/logo.svelte';
	import FormControl from '$lib/components/form/form-control.svelte';
</script>

<svelte:head>
	<title>Восстановить пароль - Планомер</title>
</svelte:head>

<div
	class="
    w-[658px] h-[658px]
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-white
    shrink-0 grow-0
    flex flex-col itesm-center
    pt-[102px] px-[67px]
"
>
	<a href="/" class="mb-4 mx-auto">
		<Logo />
	</a>

	<div class="text-[25px] mx-auto">Восстановить пароль</div>

	<form class=" flex flex-col gap-5 w-full" action="" method="post">
		<FormControl label="Email Address" name="email" />
		<button type="button" class="button button-primary mt-[43px]">Reset password</button>
	</form>
</div>
