<script lang="ts">
	import Dropzone from 'svelte-file-dropzone';
	import PhotoIcon from '$lib/components/icons/photo-icon.svelte';

	let files = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
</script>

<div class="flex items-center">
	<div class="bg-[#F7F7F8] w-[134px] h-[134px] rounded-full overflow-hidden mx-auto relative">
		<Dropzone on:drop={handleFilesSelect} containerClasses="opacity-0" disableDefaultStyles />
		<ol>
			{#each files.accepted as item}
				<li>{item.name}</li>
			{/each}
		</ol>

		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#030229] pointer-events-none"
		>
			<PhotoIcon />
		</div>
	</div>
</div>
