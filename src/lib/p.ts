import { goto } from '$app/navigation';
import { page } from '$app/state';
import { i18n } from '$lib/i18n';
import type { AvailableLanguageTag } from '$lib/paraglide/runtime';

export function switchToLanguage(newLanguage: AvailableLanguageTag) {
	gotoAny(null, newLanguage);
}

export function gotoCurrentLanguage(newUrl: string) {
	gotoAny(newUrl, null);
}

function gotoAny(newUrl: string | null, newLanguage: AvailableLanguageTag | null) {
	const canonicalPath = i18n.route(newUrl == null ? page.url.pathname : newUrl);
	let localisedPath;

	if (newLanguage == null) {
		localisedPath = i18n.resolveRoute(canonicalPath);
	} else {
		localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
	}

	goto(localisedPath);
}
