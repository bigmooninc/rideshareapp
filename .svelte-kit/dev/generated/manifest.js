const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/dashboard/index.svelte"),
	() => import("../../../src/routes/register/index.svelte"),
	() => import("../../../src/routes/shifts/index.svelte"),
	() => import("../../../src/routes/login/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/register/index.svelte
	[/^\/register\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/shifts/index.svelte
	[/^\/shifts\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/login/index.svelte
	[/^\/login\/?$/, [c[0], c[6]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];