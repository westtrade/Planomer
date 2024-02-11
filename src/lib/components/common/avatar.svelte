<script lang="ts">
	import noPictureSrc from '$lib/assets/no-profile-picture-icon.svg';

	export let src: string | undefined = undefined;
	export let fullRounded: boolean = false;

	let className: string = '';
	export { className as class };

	export let size: number | undefined = 45;
</script>

<div
	class={`overflow-hidden w-[45px] h-[45px] rounded-xl bg-[#FFC7D4] shrink-0 grow-0 ${className}`}
	class:rounded-full={fullRounded}
	class:rounded-xl={!fullRounded}
>
	<img src={src || noPictureSrc} alt="" width={size} height={size} />
</div>
