<script lang="ts">
	import noPictureSrc from '$lib/assets/no-profile-picture-icon.svg';

	export let src: string | undefined = undefined;
	export let fullRounded: boolean = false;
</script>

<div
	class="overflow-hidden w-[45px] h-[45px] rounded-xl bg-[#FFC7D4] shrink-0 grow-0"
	class:rounded-full={fullRounded}
	class:rounded-xl={!fullRounded}
>
	<img src={src || noPictureSrc} alt="" />
</div>
