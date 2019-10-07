import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as text, p as claim_text, h as insert_dev, n as noop, f as detach_dev } from './index.e41c27b8.js';

/* src\routes\proyectos\index.svelte generated by Svelte v3.12.1 */

function create_fragment(ctx) {
	var t;

	const block = {
		c: function create() {
			t = text("proyectos...");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "proyectos...");
		},

		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });
	}
}

export default Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjdkMDljZGUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
