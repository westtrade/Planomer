<script lang="ts">
	import LogoutIcon from '../icons/logout-icon.svelte';
	import Avatar from './avatar.svelte';

	export let avatar: string = '';
	export let name: string;
	export let organization: string;
</script>

<div class="flex flex-row gap-[10px] items-center">
	<Avatar src={avatar} />
	<div class="flex flex-col text-xs text-nowrap">
		<div class="text-black">
			{name}
		</div>
		<div class="text-black text-opacity-50">
			{organization}
		</div>
	</div>

	<a href="/logout" class="w-4 h-4 shrink-0">
		<LogoutIcon />
	</a>
</div>
