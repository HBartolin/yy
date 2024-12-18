<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
