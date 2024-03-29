<script lang="ts">
	import Gift from '$lib/assets/svg/gift.svg?component';
	import Clock from '$lib/assets/svg/clock.svg?component';

	import Card from '$lib/components/Card.svelte';

	import dayjs from 'dayjs';

	const balance = 120;
	const payments = [
		{ date: dayjs().format('DD.MM.YYYY'), value: 20 },
		{ date: dayjs().format('DD.MM.YYYY'), value: 20 }
	];
	const weeklyRewardTotal = 120;
	const weeklyRewardEnd = dayjs().add(1, 'month');
	const weeklyStats = [
		{ title: 'Mint Volume', volume: 0, reward: 0 },
		{ title: 'Bridge Volume', volume: 0, reward: 0 },
		{ title: 'Refuel Volume', volume: 0, reward: 0 },
		{ title: 'Referral Volume', volume: 0, reward: 0 }
	];
	const multiplicators = {
		dateStart: dayjs().subtract(1, 'month'),
		reward: 0
	};
	const rules = [
		{
			title: 'Mint Volume',
			items: [
				{ volume: 100, reward: 20 },
				{ volume: 1000, reward: 40 }
			]
		},
		{
			title: 'Bridge Volume',
			items: [
				{ volume: 100, reward: 20 },
				{ volume: 1000, reward: 40 }
			]
		},
		{
			title: 'Refuel Volume',
			items: [
				{ volume: 100, reward: 20 },
				{ volume: 1000, reward: 40 }
			]
		},
		{
			title: 'Referrals',
			items: [
				{ volume: 100, reward: 20 },
				{ volume: 1000, reward: 40 }
			]
		}
	];

	const leaders = [
		{ username: 'XXX', points: 980 },
		{ username: 'Oleg', points: 350 },
		{ username: 'Petr', points: 45 },
		{ username: 'Chelovek', points: 35 },
		{ username: 'Ivan', points: 20 }
	];
</script>

<div class="container grid lg:grid-cols-2 gap-[18px] pt-[18px] pb-24">
	<div class="space-y-[18px]">
		<div class="">
			<Card>
				<div class="space-y-3">
					<p class="text-[2rem] font-bold">XPoints</p>
					<p class="text-white/65 text-sm">
						<b class="text-white">GhostMint</b> will share 50% of potential ecosystem airdrop it gets
						in the future. Mint, Bridge, Refuel and Refer friends will earn the XPoints. The more points
						you earn, the more airdrop you will be shared.
					</p>
				</div>
			</Card>
		</div>
		<div class="pointer-events-none select-none blur-sm">
			<Card head="My XPoints">
				<div class="space-y-1 font-bold">
					<p class="text-2xl">{balance} <span class="text-yellow">XPoints</span></p>
				</div>
			</Card>
			<Card>
				<svelte:fragment slot="head">
					<p>History</p>
				</svelte:fragment>
				<div class="space-y-1">
					{#each payments as { date, value }}
						<div class="grid grid-cols-[auto_1fr_auto] text-white/65 text-sm gap-2 py-2">
							<p>{date}</p>
							<div class="border-b border-dashed border-white/35 h-4"></div>
							<p>{value} points</p>
						</div>
					{/each}
				</div>
			</Card>
		</div>
		<div class="pointer-events-none select-none blur-sm">
			<Card>
				<svelte:fragment slot="head">
					<p>Weekly Reward</p>
					<div class="ml-auto flex items-center justify-end space-x-0.5">
						<Clock class="w-5 aspect-square" />
						<p>End Time</p>
					</div>
				</svelte:fragment>
				<div class="flex items-center justify-between">
					<p class="text-2xl font-bold">
						{weeklyRewardTotal} <span class="text-yellow">XPoints</span>
					</p>
					<p class="text-sm font-bold">{dayjs(weeklyRewardEnd).format('DD.MM.YYYY HH:mm')}</p>
				</div>
			</Card>
			{#each weeklyStats as { title, volume, reward }}
				<Card>
					<svelte:fragment slot="head">
						<p>{title}</p>
						<p class="ml-auto">XPoints Reward</p>
					</svelte:fragment>
					<div class="py-2 grid grid-cols-[auto_1fr_auto] space-x-4">
						<p class="text-white/65">${volume}</p>
						<div class="h-3.5 border-b border-white/35 border-dashed"></div>
						<div class="flex items-center justify-end space-x-1">
							<p class="font-bold">+{reward}</p>
							<Gift class="w-5 aspect-square" />
						</div>
					</div>
				</Card>
			{/each}
			<Card>
				<svelte:fragment slot="head">
					<p>Multiplicators</p>
					<p class="ml-auto">XPoints Reward</p>
				</svelte:fragment>
				<div class="py-2 grid grid-cols-[auto_1fr_auto] space-x-4">
					<div>
						<p class="text-white/35 font-sm">Age</p>
						<p class="text-white/65">
							{Math.abs(dayjs(multiplicators.dateStart).diff(dayjs(), 'days'))} days
						</p>
					</div>
					<div class="h-[26px] border-b border-white/35 border-dashed"></div>
					<div class="flex items-center justify-end gap-1">
						<p class="font-bold">+{multiplicators.reward}</p>
						<Gift class="w-5 aspect-square" />
					</div>
				</div>
			</Card>
		</div>
	</div>
	<div class="space-y-[18px]">
		<div class="pointer-events-none select-none blur-sm">
			<Card head="Rules">
				<p class="text-2xl font-bold">
					Use <span class="text-yellow">GhostMint</span> on Blast
				</p>
			</Card>
			{#each rules as { title, items }}
				<Card head={title}>
					{#each items as { volume, reward }}
						<div class="p-3 bg-white/5 flex items-center justify-between rounded-xl">
							<p class="font-bold text-white/65">${volume} +</p>
							<div class="flex items-center justify-end gap-1">
								<p class="font-bold text-white">+{reward}</p>
								<Gift class="w-5 aspect-square" />
							</div>
						</div>
					{/each}
				</Card>
			{/each}
		</div>
		<div class="pointer-events-none select-none blur-sm">
			<Card head="Leaderboard" />
			<Card class="!p-0">
				{#each leaders as { username, points }, i}
					<div
						class="flex items-center justify-between w-full py-3 px-8 {i % 2 === 0
							? 'class:bg-white/5'
							: ''}"
					>
						<p class="text-sm text-white/65">{username}</p>
						<p class="text-sm font-bold">{points} XPoints</p>
					</div>
				{/each}
			</Card>
		</div>
	</div>
</div>
