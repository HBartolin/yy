<script lang="ts">
	import { switchToLanguage, gotoCurrentLanguage } from '$lib/p';
	import * as m from '$lib/paraglide/messages.js';
</script>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
	<button onclick={() => switchToLanguage('en')}>en</button>
	<button onclick={() => switchToLanguage('hr')}>hr</button>
</div>

<button onclick={() => gotoCurrentLanguage('/')}>"/home"</button>

