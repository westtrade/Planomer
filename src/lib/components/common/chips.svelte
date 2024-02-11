<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div
	class={`inline-flex flex-row px-[14px] text-black leading-[27px] rounded-[27px] text-xs ${className}`}
>
	<slot />
</div>
