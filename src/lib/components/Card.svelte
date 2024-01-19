<div
	class="bg-blue-dark py-6 px-8 first-of-type:rounded-t-3xl last-of-type:rounded-b-3xl [&:not(:first-of-type)]:mt-0.5 text-white space-y-1"
>
	{#if $$slots.head}
		<div class="text-white/35 text-sm flex items-center justify-start font-bold">
			<slot name="head" />
		</div>
	{/if}
	<slot />
</div>
