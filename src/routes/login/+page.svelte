<script>
	import Button from '$lib/components/common/button.svelte';
	import Divider from '$lib/components/common/divider.svelte';
	import Logo from '$lib/components/common/logo.svelte';
	import FormControl from '$lib/components/form/form-control.svelte';
	import LayoutWithSidebar from '$lib/components/layouts/layout-with-sidebar.svelte';

	import GoogleIcon from '$lib/components/icons/google-icon.svelte';
	import FacebookIcon from '$lib/components/icons/facebook-icon.svelte';
	import InputCheckbox from '$lib/components/form/input-checkbox.svelte';

	import pageIllustration from '$lib/assets/login-page.png';
</script>

<svelte:head>
	<title>Войти - Планомер</title>
</svelte:head>

<LayoutWithSidebar>
	<svelte:fragment slot="sidebar">
		<div class="flex flex-col gap-5 mt-[58px] w-full">
			<a href="/" class="mb-4 mx-auto">
				<Logo />
			</a>

			<div class="text-[25px] mx-auto">Войти</div>

			<div class="flex flex-row w-full gap-[22px]">
				<a class="button button-secondary">
					<GoogleIcon />
					Google
				</a>
				<a class="button button-secondary">
					<FacebookIcon />
					Facebook
				</a>
			</div>

			<Divider>Или</Divider>

			<form class=" flex flex-col gap-5 w-full" action="" method="post">
				<FormControl label="Email Address" name="email" />
				<FormControl label="Password" name="password" type="password" />

				<div class="flex flex-row justify-between">
					<InputCheckbox>
						<svelte:fragment slot="label">Remember me</svelte:fragment>
					</InputCheckbox>

					<a href="/recovery" class="link">Reset Password?</a>
				</div>

				<button type="button" class="button button-primary mt-[43px]">Create account</button>
			</form>

			<div class="text-center">
				Don’t have account yet? <a href="/registration" class="link">New Account</a>
			</div>
		</div>
	</svelte:fragment>

	<img
		src={pageIllustration}
		width="647"
		height="602"
		class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
	/>
</LayoutWithSidebar>
