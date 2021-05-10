import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\n\n\t\t\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-3ba165c6.js",
			css: ["/./_app/assets/start-0826e215.css","/./_app/assets/vendor-d4876607.css"],
			js: ["/./_app/start-3ba165c6.js","/./_app/chunks/vendor-ce82561a.js","/./_app/chunks/singletons-bb9012b7.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/dashboard\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/dashboard/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/register\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/register/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/login\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/login/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/dashboard/index.svelte": () => import("../../src/routes/dashboard/index.svelte"),"src/routes/register/index.svelte": () => import("../../src/routes/register/index.svelte"),"src/routes/login/index.svelte": () => import("../../src/routes/login/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-d0913c1d.js","css":["/./_app/assets/pages/__layout.svelte-1a74d921.css","/./_app/assets/vendor-d4876607.css"],"js":["/./_app/pages/__layout.svelte-d0913c1d.js","/./_app/chunks/vendor-ce82561a.js","/./_app/chunks/stores-62b324a6.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-d0609c39.js","css":["/./_app/assets/vendor-d4876607.css"],"js":["/./_app/error.svelte-d0609c39.js","/./_app/chunks/vendor-ce82561a.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-a81ac6f1.js","css":["/./_app/assets/vendor-d4876607.css"],"js":["/./_app/pages/index.svelte-a81ac6f1.js","/./_app/chunks/vendor-ce82561a.js","/./_app/chunks/navigation-20968cc5.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/stores-62b324a6.js"],"styles":null},"src/routes/dashboard/index.svelte":{"entry":"/./_app/pages/dashboard/index.svelte-648e7aac.js","css":["/./_app/assets/pages/dashboard/index.svelte-609861fa.css","/./_app/assets/vendor-d4876607.css"],"js":["/./_app/pages/dashboard/index.svelte-648e7aac.js","/./_app/chunks/vendor-ce82561a.js","/./_app/chunks/stores-62b324a6.js"],"styles":null},"src/routes/register/index.svelte":{"entry":"/./_app/pages/register/index.svelte-e9db1a5a.js","css":["/./_app/assets/pages/register/index.svelte-5d556980.css","/./_app/assets/vendor-d4876607.css"],"js":["/./_app/pages/register/index.svelte-e9db1a5a.js","/./_app/chunks/vendor-ce82561a.js","/./_app/chunks/navigation-20968cc5.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/stores-62b324a6.js"],"styles":null},"src/routes/login/index.svelte":{"entry":"/./_app/pages/login/index.svelte-dc5b5de8.js","css":["/./_app/assets/pages/register/index.svelte-5d556980.css","/./_app/assets/vendor-d4876607.css"],"js":["/./_app/pages/login/index.svelte-dc5b5de8.js","/./_app/chunks/vendor-ce82561a.js","/./_app/chunks/navigation-20968cc5.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/stores-62b324a6.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}