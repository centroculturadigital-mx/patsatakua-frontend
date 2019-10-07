import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, u as space, e as element, o as text, w as claim_space, a as claim_element, b as children, p as claim_text, f as detach_dev, x as attr_dev, g as add_location, h as insert_dev, q as append_dev, A as mount_component, n as noop, t as transition_in, l as transition_out, D as destroy_component } from './index.e41c27b8.js';
import { P as ProyectoVistaPrevia } from './ProyectoVistaPrevia.95f770c2.js';

/* src\routes\index.svelte generated by Svelte v3.12.1 */

const file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
	var t0, section4, div0, header, h1, t1, t2, h4, t3, t4, section0, p0, t5, t6, p1, t7, t8, div1, section1, ul0, t9, t10, t11, t12, t13, footer, section2, t14, br0, t15, br1, t16, t17, section3, ul1, img0, t18, img1, t19, img2, current;

	var proyectovistaprevia0 = new ProyectoVistaPrevia({ $$inline: true });

	var proyectovistaprevia1 = new ProyectoVistaPrevia({ $$inline: true });

	var proyectovistaprevia2 = new ProyectoVistaPrevia({ $$inline: true });

	var proyectovistaprevia3 = new ProyectoVistaPrevia({ $$inline: true });

	var proyectovistaprevia4 = new ProyectoVistaPrevia({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			section4 = element("section");
			div0 = element("div");
			header = element("header");
			h1 = element("h1");
			t1 = text("Patsatakua");
			t2 = space();
			h4 = element("h4");
			t3 = text("Purépecha (P’urhépecha) que quiere decir, “en lo que se guarda”");
			t4 = space();
			section0 = element("section");
			p0 = element("p");
			t5 = text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore molestias dicta ex veritatis accusantium ullam impedit praesentium, nulla, nesciunt vero esse quo. Dolores fugiat, distinctio expedita iste debitis excepturi.");
			t6 = space();
			p1 = element("p");
			t7 = text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nihil aut pariatur voluptatum maiores necessitatibus explicabo totam vero ad sit ex, eligendi ipsum, dignissimos saepe consequatur error officiis optio accusantium.");
			t8 = space();
			div1 = element("div");
			section1 = element("section");
			ul0 = element("ul");
			proyectovistaprevia0.$$.fragment.c();
			t9 = space();
			proyectovistaprevia1.$$.fragment.c();
			t10 = space();
			proyectovistaprevia2.$$.fragment.c();
			t11 = space();
			proyectovistaprevia3.$$.fragment.c();
			t12 = space();
			proyectovistaprevia4.$$.fragment.c();
			t13 = space();
			footer = element("footer");
			section2 = element("section");
			t14 = text("Encontramos\r\nque esta palabra nos acerca a la idea principal de este conjunto de proyectos e iniciativas que,\r\ndesde las comunidades de hablantes, entretejen lengua y tecnología. Esta idea de ser un\r\nespacio en el que se guarda se aproxima a la idea de un repositorio en esta materialidad\r\nllamada internet.\r\n");
			br0 = element("br");
			t15 = space();
			br1 = element("br");
			t16 = text("\r\nLo que aquí presentamos es un conjunto de iniciativas que desde la fuerza de diversas\r\ncomunidades de hablantes de lenguas indígenas, ubicados en diversos puntos del país, buscan\r\nreescribir las tecnologías.");
			t17 = space();
			section3 = element("section");
			ul1 = element("ul");
			img0 = element("img");
			t18 = space();
			img1 = element("img");
			t19 = space();
			img2 = element("img");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_space(nodes);

			section4 = claim_element(nodes, "SECTION", { class: true }, false);
			var section4_nodes = children(section4);

			div0 = claim_element(section4_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			header = claim_element(div0_nodes, "HEADER", {}, false);
			var header_nodes = children(header);

			h1 = claim_element(header_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Patsatakua");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(header_nodes);

			h4 = claim_element(header_nodes, "H4", { class: true }, false);
			var h4_nodes = children(h4);

			t3 = claim_text(h4_nodes, "Purépecha (P’urhépecha) que quiere decir, “en lo que se guarda”");
			h4_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);

			section0 = claim_element(div0_nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			p0 = claim_element(section0_nodes, "P", {}, false);
			var p0_nodes = children(p0);

			t5 = claim_text(p0_nodes, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore molestias dicta ex veritatis accusantium ullam impedit praesentium, nulla, nesciunt vero esse quo. Dolores fugiat, distinctio expedita iste debitis excepturi.");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(section0_nodes);

			p1 = claim_element(section0_nodes, "P", {}, false);
			var p1_nodes = children(p1);

			t7 = claim_text(p1_nodes, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nihil aut pariatur voluptatum maiores necessitatibus explicabo totam vero ad sit ex, eligendi ipsum, dignissimos saepe consequatur error officiis optio accusantium.");
			p1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t8 = claim_space(section4_nodes);

			div1 = claim_element(section4_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			section1 = claim_element(div1_nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			ul0 = claim_element(section1_nodes, "UL", { class: true }, false);
			var ul0_nodes = children(ul0);

			proyectovistaprevia0.$$.fragment.l(ul0_nodes);
			t9 = claim_space(ul0_nodes);
			proyectovistaprevia1.$$.fragment.l(ul0_nodes);
			t10 = claim_space(ul0_nodes);
			proyectovistaprevia2.$$.fragment.l(ul0_nodes);
			t11 = claim_space(ul0_nodes);
			proyectovistaprevia3.$$.fragment.l(ul0_nodes);
			t12 = claim_space(ul0_nodes);
			proyectovistaprevia4.$$.fragment.l(ul0_nodes);
			ul0_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t13 = claim_space(div1_nodes);

			footer = claim_element(div1_nodes, "FOOTER", { class: true }, false);
			var footer_nodes = children(footer);

			section2 = claim_element(footer_nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			t14 = claim_text(section2_nodes, "Encontramos\r\nque esta palabra nos acerca a la idea principal de este conjunto de proyectos e iniciativas que,\r\ndesde las comunidades de hablantes, entretejen lengua y tecnología. Esta idea de ser un\r\nespacio en el que se guarda se aproxima a la idea de un repositorio en esta materialidad\r\nllamada internet.\r\n");

			br0 = claim_element(section2_nodes, "BR", {}, false);
			var br0_nodes = children(br0);

			br0_nodes.forEach(detach_dev);
			t15 = claim_space(section2_nodes);

			br1 = claim_element(section2_nodes, "BR", {}, false);
			var br1_nodes = children(br1);

			br1_nodes.forEach(detach_dev);
			t16 = claim_text(section2_nodes, "\r\nLo que aquí presentamos es un conjunto de iniciativas que desde la fuerza de diversas\r\ncomunidades de hablantes de lenguas indígenas, ubicados en diversos puntos del país, buscan\r\nreescribir las tecnologías.");
			section2_nodes.forEach(detach_dev);
			t17 = claim_space(footer_nodes);

			section3 = claim_element(footer_nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			ul1 = claim_element(section3_nodes, "UL", {}, false);
			var ul1_nodes = children(ul1);

			img0 = claim_element(ul1_nodes, "IMG", { src: true, alt: true }, false);
			var img0_nodes = children(img0);

			img0_nodes.forEach(detach_dev);
			t18 = claim_space(ul1_nodes);

			img1 = claim_element(ul1_nodes, "IMG", { src: true, alt: true }, false);
			var img1_nodes = children(img1);

			img1_nodes.forEach(detach_dev);
			t19 = claim_space(ul1_nodes);

			img2 = claim_element(ul1_nodes, "IMG", { src: true, alt: true }, false);
			var img2_nodes = children(img2);

			img2_nodes.forEach(detach_dev);
			ul1_nodes.forEach(detach_dev);
			section3_nodes.forEach(detach_dev);
			footer_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section4_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			document.title = "Patsatakua";
			attr_dev(h1, "class", "Titulo svelte-ey6kag");
			add_location(h1, file, 126, 3, 1861);
			attr_dev(h4, "class", "Subtitulo svelte-ey6kag");
			add_location(h4, file, 130, 3, 1913);
			add_location(header, file, 125, 2, 1848);
			add_location(p0, file, 137, 3, 2070);
			add_location(p1, file, 140, 3, 2323);
			attr_dev(section0, "class", "Introduccion svelte-ey6kag");
			add_location(section0, file, 136, 2, 2035);
			attr_dev(div0, "class", "Lateral svelte-ey6kag");
			add_location(div0, file, 124, 1, 1823);
			attr_dev(ul0, "class", "svelte-ey6kag");
			add_location(ul0, file, 151, 3, 2763);
			attr_dev(section1, "class", "Lista svelte-ey6kag");
			add_location(section1, file, 150, 2, 2735);
			add_location(br0, file, 169, 0, 3313);
			add_location(br1, file, 170, 0, 3319);
			attr_dev(section2, "class", "TextoPie svelte-ey6kag");
			add_location(section2, file, 163, 3, 2972);
			attr_dev(img0, "src", "https://source.unsplash.com/user/erondu/140x70");
			attr_dev(img0, "alt", "");
			add_location(img0, file, 178, 3, 3595);
			attr_dev(img1, "src", "https://source.unsplash.com/user/erondu/140x70");
			attr_dev(img1, "alt", "");
			add_location(img1, file, 179, 3, 3665);
			attr_dev(img2, "src", "https://source.unsplash.com/user/erondu/140x70");
			attr_dev(img2, "alt", "");
			add_location(img2, file, 180, 3, 3735);
			add_location(ul1, file, 177, 3, 3586);
			attr_dev(section3, "class", "LogosPie svelte-ey6kag");
			add_location(section3, file, 176, 3, 3555);
			attr_dev(footer, "class", "Pie svelte-ey6kag");
			add_location(footer, file, 162, 1, 2947);
			attr_dev(div1, "class", "contenedor-principal svelte-ey6kag");
			add_location(div1, file, 149, 1, 2697);
			attr_dev(section4, "class", "Inicio svelte-ey6kag");
			add_location(section4, file, 122, 0, 1794);
		},

		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section4, anchor);
			append_dev(section4, div0);
			append_dev(div0, header);
			append_dev(header, h1);
			append_dev(h1, t1);
			append_dev(header, t2);
			append_dev(header, h4);
			append_dev(h4, t3);
			append_dev(div0, t4);
			append_dev(div0, section0);
			append_dev(section0, p0);
			append_dev(p0, t5);
			append_dev(section0, t6);
			append_dev(section0, p1);
			append_dev(p1, t7);
			append_dev(section4, t8);
			append_dev(section4, div1);
			append_dev(div1, section1);
			append_dev(section1, ul0);
			mount_component(proyectovistaprevia0, ul0, null);
			append_dev(ul0, t9);
			mount_component(proyectovistaprevia1, ul0, null);
			append_dev(ul0, t10);
			mount_component(proyectovistaprevia2, ul0, null);
			append_dev(ul0, t11);
			mount_component(proyectovistaprevia3, ul0, null);
			append_dev(ul0, t12);
			mount_component(proyectovistaprevia4, ul0, null);
			append_dev(div1, t13);
			append_dev(div1, footer);
			append_dev(footer, section2);
			append_dev(section2, t14);
			append_dev(section2, br0);
			append_dev(section2, t15);
			append_dev(section2, br1);
			append_dev(section2, t16);
			append_dev(footer, t17);
			append_dev(footer, section3);
			append_dev(section3, ul1);
			append_dev(ul1, img0);
			append_dev(ul1, t18);
			append_dev(ul1, img1);
			append_dev(ul1, t19);
			append_dev(ul1, img2);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			transition_in(proyectovistaprevia0.$$.fragment, local);

			transition_in(proyectovistaprevia1.$$.fragment, local);

			transition_in(proyectovistaprevia2.$$.fragment, local);

			transition_in(proyectovistaprevia3.$$.fragment, local);

			transition_in(proyectovistaprevia4.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(proyectovistaprevia0.$$.fragment, local);
			transition_out(proyectovistaprevia1.$$.fragment, local);
			transition_out(proyectovistaprevia2.$$.fragment, local);
			transition_out(proyectovistaprevia3.$$.fragment, local);
			transition_out(proyectovistaprevia4.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t0);
				detach_dev(section4);
			}

			destroy_component(proyectovistaprevia0);

			destroy_component(proyectovistaprevia1);

			destroy_component(proyectovistaprevia2);

			destroy_component(proyectovistaprevia3);

			destroy_component(proyectovistaprevia4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDhjNzAwZDEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
