<script>
	import Button from '$lib/components/common/button.svelte';
	import Divider from '$lib/components/common/divider.svelte';
	import Logo from '$lib/components/common/logo.svelte';
	import FormControl from '$lib/components/form/form-control.svelte';
	import LayoutWithSidebar from '$lib/components/layouts/layout-with-sidebar.svelte';

	import GoogleIcon from '$lib/components/icons/google-icon.svelte';
	import FacebookIcon from '$lib/components/icons/facebook-icon.svelte';
	import InputCheckbox from '$lib/components/form/input-checkbox.svelte';

	import registrationPageIllustration from '$lib/assets/registration-page.png';
</script>

<svelte:head>
	<title>Регистрация - Планомер</title>
</svelte:head>

<LayoutWithSidebar>
	<svelte:fragment slot="sidebar">
		<div class="flex flex-col gap-5 mt-[58px] w-full">
			<a href="/" class="mb-4 mx-auto relative left-[20px]">
				<Logo />
			</a>

			<div class="text-[25px] mx-auto">Регистрация</div>

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
				<FormControl label="Full Name" name="name" />
				<FormControl label="Email Address" name="email" />
				<FormControl label="Username" name="username" />
				<FormControl label="Password" name="password" type="password" />

				<div class="mb-9">
					<InputCheckbox>
						<svelte:fragment slot="label">
							By creating an account you agree to the
							<a href="/terms-of-use" class="link" target="_blank">terms of use</a>
							and our <a href="/privacy-policy" class="link" target="_blank">privacy policy</a>.
						</svelte:fragment>
					</InputCheckbox>
				</div>

				<button type="button" class="button button-primary"> Create account </button>
			</form>

			<div class="text-center">
				Already have an account? <a href="/login" class="link">Log in</a>
			</div>
		</div>
	</svelte:fragment>

	<img
		src={registrationPageIllustration}
		width="693"
		height="427"
		class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
	/>
</LayoutWithSidebar>
