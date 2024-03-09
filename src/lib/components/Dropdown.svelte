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
		// selected = item;
		// await tick();
		emit('select', item);
	};
</script>

<div
	class="relative flex-none {$$restProps.class || ''}"
	use:clickOutside={() => (expanded = false)}
>
	<label
		class="uppercase flex items-center justify-center border-2 border-yellow text-yellow py-3 px-6 text-sm font-bold rounded-lg bg-dark w-50 transition-all ease-linear duration-300 cursor-pointer"
		aria-expanded={expanded}
		aria-haspopup="true"
	>
		<input type="checkbox" bind:checked={expanded} class="hidden" />
		<slot name="trigger" item={selected} />
	</label>
	<div
		class="lg:hidden fixed top-0 left-0 z-10 bg-black/60 w-screen h-screen"
		class:ease-out={expanded}
		class:duration-100={expanded}
		class:ease-in={!expanded}
		class:duration-75={!expanded}
		class:opacity-0={!expanded}
		class:scale-95={!expanded}
		class:pointer-events-none={!expanded}
	>
		<button on:click={() => (expanded = false)} type="button" class="absolute inset-0"></button>
	</div>
	<div
		class="lg:absolute lg:left-0 z-10 my-2 rounded-md bg-blue-dark py-2 shadow-lg focus:outline-none transition-all lg:origin-top-right fixed max-lg:top-1/2 left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 lg:max-h-[198px] max-lg:w-[calc(100dvw-3rem)] max-h-[calc(100dvh-4rem)] overflow-y-auto body {position}"
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

<style lang="postcss">
	.body {
		scrollbar-color: theme('colors.yellow.DEFAULT') theme('colors.blue.dark');
		scrollbar-width: thin;
	}

	.body::-webkit-scrollbar {
		width: theme('width.1');
	}

	.scrollbar-small::-webkit-scrollbar {
		width: theme('width.1');
	}

	.body::-webkit-scrollbar-track {
		background-color: theme('colors.blue.dark');
	}

	.body::-webkit-scrollbar-thumb {
		background-color: theme('colors.yellow.DEFAULT');
	}
</style>
