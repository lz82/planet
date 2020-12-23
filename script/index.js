var app = new Vue({
	el: '#app',

	data: {
		step: '2',
		typedJs: false,
		p2Swiper: null,
	},

	mounted() {
		particlesJS('app', {
			particles: {
				number: {
					value: 80,
					density: {
						enable: true,
						value_area: 800,
					},
				},
				color: {
					value: '#ccc',
				},
				shape: {
					type: 'circle',
					stroke: {
						width: 0,
						color: '#000000',
					},
					polygon: {
						nb_sides: 5,
					},
					image: {
						src: 'img/github.svg',
						width: 100,
						height: 100,
					},
				},
				opacity: {
					value: 0.5,
					random: false,
					anim: {
						enable: false,
						speed: 1,
						opacity_min: 0.1,
						sync: false,
					},
				},
				size: {
					value: 5,
					random: true,
					anim: {
						enable: false,
						speed: 40,
						size_min: 0.1,
						sync: false,
					},
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: '#ccc',
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 6,
					direction: 'none',
					random: false,
					straight: false,
					out_mode: 'out',
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200,
					},
				},
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: {
						enable: true,
						mode: 'repulse',
					},
					onclick: {
						enable: false,
						mode: 'push',
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1,
						},
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: {
						distance: 200,
					},
					push: {
						particles_nb: 4,
					},
					remove: {
						particles_nb: 2,
					},
				},
			},
			retina_detect: true,
		});
	},

	methods: {
		onStepClick(val) {
			this.step = val;
		},
	},

	watch: {
		step(val) {
			if (val === '1') {
				if (!this.typedJs) {
					new Typed('.p2-word', {
						strings: [
							`<div>在我们生存的星球上</div>\n
							<div>有着多样又生机勃勃的生态系统</div>\n
							<div>实际上</div>\n
							<div>它们脆弱又容易崩溃</div>\n
							<div>丛林可能变成沙漠</div>\n
							<div>珊瑚礁可能变成死气沉沉的石头</div>\n
							<div>在面对变化时</div>\n
							<div>是什么决定了一个生态系统的优胜劣汰</div>\n
							<div>在很大程度上来说是生物多样性</div>\n
							<div>全球大约10%的动植物生存受到威胁</div>\n
							<div>大量物种将在几十年内濒临灭绝</div>\n
							<div><b style="font-size: 20px; color: #ff4d4f;">中国是世界上生物多样性最丰富的国家之一</b></div>\n
							<div><b style="font-size: 20px; color: #ff4d4f">中国是生物多样性受威胁最严重的国家之一</b></div>`,
						],
						smartBackspace: true, // Default value
						typeSpeed: 50, //打印速度
						startDelay: 300, //开始之前的延迟300毫秒
						loop: false, //是否循环
						showCursor: false,
					});
					this.typedJs = true;
				}
				if (!this.p2Swiper) {
					setTimeout(() => {
						this.p2Swiper = new Swiper('.swiper-container', {
							loop: true, // 循环模式选项
							autoplay: {
								delay: 3000,
								stopOnLastSlide: false,
								disableOnInteraction: true,
							},
							effect: 'fade',
							fadeEffect: {
								crossFade: true,
							},
						});
					}, 300);
				} else {
					this.p2Swiper.autoplay.run();
				}
			} else {
				console.log(this.p2Swiper);
			}
		},
	},
});
