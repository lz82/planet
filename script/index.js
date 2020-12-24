var app = new Vue({
	el: '#app',

	data: {
		step: '0',
		p2TypedJs: false,
		p2Swiper: null,
		p4TypedJs: false,
		p4Swiper: null,
		p6TypedJs: false,
	},

	mounted: function() {
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
		onStepClick: function (val) {
			this.step = val;
		},
	},

	watch: {
		step: function (val) {
			if (val === '1') {
				if (!this.p2TypedJs) {
					new Typed('#p2-word', {
						strings: [
							'<div>在我们生存的星球上</div>\n<div>有着多样又生机勃勃的生态系统</div>\n<div>实际上</div>\n<div>它们脆弱又容易崩溃</div>\n<div>丛林可能变成沙漠</div>\n<div>珊瑚礁可能变成死气沉沉的石头</div>\n<div>在面对变化时</div>\n<div>是什么决定了一个生态系统的优胜劣汰</div>\n<div>在很大程度上来说是生物多样性</div>\n<div>全球大约10%的动植物生存受到威胁</div>\n<div>大量物种将在几十年内濒临灭绝</div>\n<div><b style="font-size: 20px; color: #ff4d4f;">中国是世界上生物多样性最丰富的国家之一</b></div>\n<div><b style="font-size: 20px; color: #ff4d4f">中国是生物多样性受威胁最严重的国家之一</b></div>',
						],
						smartBackspace: true, // Default value
						typeSpeed: 50, //打印速度
						startDelay: 300, //开始之前的延迟300毫秒
						loop: false, //是否循环
						showCursor: false,
					});
					this.p2TypedJs = true;
				}
				if (!this.p2Swiper) {
					setTimeout(function() {
						this.p2Swiper = new Swiper('#p2Swiper', {
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
					this.$nextTick(function() {
						// this.p2Swiper.autoplay.run();
						this.p2Swiper.destroy();
						setTimeout(function () {
							this.p2Swiper = new Swiper('#p2Swiper', {
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
						// this.p2Swiper.autoplay.run();
					});
				}
			} else if (val === '3') {
				if (!this.p4TypedJs) {
					new Typed('#p4-word', {
						strings: [
							'<div>2020年，注定是一个让人难以忘怀的一年。菲律宾火山爆发数万居民撤离，克什米尔雪崩至今70人死亡，非洲25年以来最严重的蝗灾，湖北武汉新型肺炎爆发，西班牙遭遇强风暴……</div>\n`<div>世界安静下来，我们听得到心跳的声音。经历过生死与突如其来的变故，让我们可以更加体会到雨果曾过的:“大自然既是善良的慈母，也是冷酷的屠夫。”</div>\n`<div>当大海里打捞出来的全是被垃圾毒害的生灵，当全球变暖海平面上升，当动物无家可归……我们是否意识到人类是世界上最特殊的物种，但当生存唾手可得时，我们便忘记了自己也只是这万千物种中的一员？</div>\n',
						],
						smartBackspace: true, // Default value
						typeSpeed: 50, //打印速度
						startDelay: 300, //开始之前的延迟300毫秒
						loop: false, //是否循环
						showCursor: false,
					});
					this.p4TypedJs = true;
				}
				if (!this.p4Swiper) {
					setTimeout(function (){
						this.p4Swiper = new Swiper('#p4Swiper', {
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
					setTimeout(function() {
						// this.p4Swiper.autoplay.run();
						this.p4Swiper.destroy();
						setTimeout(function () {
							this.p4Swiper = new Swiper('#p4Swiper', {
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
					}, 300);
				}
			} else if (val === '5') {
				if (!this.p6TypedJs) {
					new Typed('#p6-word', {
						strings: [
							'<span>甘甜的河水，清新的空气</span>\n<span>茂密的森林，翠绿的松柏</span>\n<span>奇妙的海洋世界……</span>\n<span>从动物、植物到微生物</span>\n<span>丰富多彩的自然界使我们的地球充满生机</span>\n<span>这样的美景要靠我们每个人去实现</span>\n<span>为我们的地球母亲行动起来</span>\n<span>贡献自己的一份力吧</span>'
							,
						],
						smartBackspace: true, // Default value
						typeSpeed: 30, //打印速度
						startDelay: 100, //开始之前的延迟300毫秒
						loop: false, //是否循环
						showCursor: false,
					});
					this.p6TypedJs = true;
				}
			}
		},
	},
});
