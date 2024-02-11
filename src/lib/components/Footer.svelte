<script lang="ts">
	import DISCORD from '$lib/assets/svg/discord.svg?component';
	import X from '$lib/assets/svg/X.svg?component';
	import GITBOOK from '$lib/assets/svg/gitbook.svg?component';
	import MEDIUM from '$lib/assets/svg/medium.svg?component';
	import Pacman from '$lib/assets/svg/pacman.svg?component';

	const socials = [
		{ icon: DISCORD, link: '#' },
		{ icon: X, link: '#' },
		{ icon: GITBOOK, link: '#' },
		{ icon: MEDIUM, link: '#' }
	];
</script>

<div class="bg-[#080026] text-[#FAF879]">
	<div class="container flex justify-between items-center py-2 gap-4 max-lg:flex-col gap-y-8">
		<a
			href="https://blast.io/en"
			target="_blank"
			class="flex items-center justify-center space-x-2 opacity-[.32] hover:opacity-100 transition-all ease-linear duration-300"
		>
			<p class="text-sm font-bold">Powered by</p>
			<img src="/img/blast.webp" alt="Blast" class="object-contain w-[157px] h-[33.117px]" />
		</a>
		<div class="flex items-center justify-center space-x-9">
			{#each socials as { icon, link }}
				<!-- <a
					href={link}
					class="opacity-[.32] hover:opacity-100 hover:-mt-2 transition-all ease-linear duration-300"
				>
					<svelte:component this={icon} class="w-8 aspect-square" />
				</a> -->
			{/each}
		</div>
		<a
			href="https://www.google.com/logos/2010/pacman10-i.html"
			target="_blank"
			class="flex items-center justify-end space-x-3 opacity-[.32] hover:opacity-100 transition-all ease-linear duration-300"
		>
			<p class="uppercase text-sm font-bold">Play Pacman</p>
			<Pacman class="w-6 aspect-square" />
		</a>
	</div>
</div>
