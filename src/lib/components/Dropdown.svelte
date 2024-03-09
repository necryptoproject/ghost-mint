<script lang="ts" generics="I extends Object">
	import { createEventDispatcher, tick } from 'svelte';

	import { clickOutside } from '$lib/clickOutside';

	export let items: I[];
	export let selected: I | undefined = undefined;
	export let position: 'top-full' | 'bottom-full' = 'top-full';

	const emit = createEventDispatcher<{ select: I }>();

	let expanded = false;

	$: isSelected = (item: I) => JSON.stringify(item) === JSON.stringify(selected);

	const select = async (item: I) => {
		selected = item;
		await tick();
		emit('select', item);
	};
</script>

<div class="relative flex-none" use:clickOutside={() => (expanded = false)}>
	<label
		class="uppercase flex items-center justify-start border-2 border-yellow text-yellow py-3 px-6 text-sm font-bold rounded-lg bg-dark w-50 transition-all ease-linear duration-300 cursor-pointer"
		aria-expanded={expanded}
		aria-haspopup="true"
	>
		<input type="checkbox" bind:checked={expanded} class="hidden" />
		<slot name="trigger" item={selected} />
	</label>
	<div
		class="absolute left-0 z-10 my-2 rounded-md bg-blue-dark py-2 shadow-lg focus:outline-none transition-all origin-top-right max-h-[198px] overflow-y-auto {position}"
		class:ease-out={expanded}
		class:duration-100={expanded}
		class:ease-in={!expanded}
		class:duration-75={!expanded}
		class:opacity-0={!expanded}
		class:scale-95={!expanded}
		class:pointer-events-none={!expanded}
		role="menu"
		aria-orientation="vertical"
		aria-labelledby="options-menu-0-button"
		tabindex="-1"
	>
		{#each items as item}
			<button
				on:click={() => select(item)}
				class="
          flex items-center justify-start gap-4 child:px-3 py-2 text-sm leading-6 text-white hover:bg-white/10 w-full text-left px-4
          {'class' in item ? item.class : ''}
          {isSelected(item) ? 'bg-white/10' : ''}
        "
				class:pointer-events-none={'disabled' in item && !!item.disabled}
				class:opacity-75={'disabled' in item && !!item.disabled}
				role="menuitem"
				tabindex="-1"
			>
				<slot {item} />
			</button>
		{/each}
	</div>
</div>
