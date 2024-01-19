<div
	class="bg-blue-dark py-6 px-8 first-of-type:rounded-t-3xl last-of-type:rounded-b-3xl [&:not(:first-of-type)]:mt-0.5 text-white space-y-1 {$$restProps.class ||
		''}"
>
	{#if $$slots.head || $$restProps.head}
		<div class="text-white/35 text-sm flex items-center justify-start font-bold">
			{#if $$slots.head}
				<slot name="head" />
			{:else if $$restProps.head}
				<p>{@html $$restProps.head}</p>
			{/if}
		</div>
	{/if}
	<slot />
</div>
