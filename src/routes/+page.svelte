<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { switchToLanguage, gotoCurrentLanguage } from '$lib/p';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
	<button onclick={() => switchToLanguage('en')}>en</button>
	<button onclick={() => switchToLanguage('hr')}>hr</button>
</div>

<button onclick={() => gotoCurrentLanguage('/demo/paraglide/')}>Paraglide</button>