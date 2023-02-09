import { Button, Row, Col, Card, Space } from 'antd';
import Navbar from './components/Navbar/Navbar';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { ArrowRightOutlined, FireFilled, FireOutlined, LeftOutlined, RightOutlined, StarFilled, StarOutlined, VerticalLeftOutlined } from '@ant-design/icons';
import { FaDiscord, FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

import headseat from "../public/img/headset.jpg";

// * swiper
import { Pagination, Navigation, Controller } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {

	const choose_your_game = [
		{ name: "WoW : Classic" },
		{ name: "Wow: BFA" },
		{ name: "Destiny 2" },
		{ name: "Starcraft 2" },
		{ name: "The Division 2" },
		{ name: "APEX Legends" },
		{ name: "Diablo Immortal" },
		{ name: "Path of Exile" }
	];
	const popular_orders = [
		{
			id: 1,
			title: "Apex: Rank Boost",
			image: "",
			description: "",
		},
		{
			id: 2,
			title: "Apex: Rank Boost",
			image: "",
			description: "",
		},
		{
			id: 3,
			title: "Apex: Rank Boost",
			image: "",
			description: "",
		},
		{
			id: 4,
			title: "Apex: Rank Boost",
			image: "",
			description: "",
		},
		{
			id: 5,
			title: "Apex: Rank Boost",
			image: "",
			description: "",
		},
		{
			id: 6,
			title: "Apex: Rank Boost",
			image: "",
			description: "",
		},
	];

	const swiper = useSwiper();

	return (
		<div className="relative h-[100vh]">
			<div className="img-banner bg-[url('public/img/banner-4.jpg')] h-[100%] w-[100%] absolute top-[-70px] left-0 bg-cover scale-x-[-1] bg-[-250px]"></div>
			<Header className="backdrop-blur-sm bg-navColor h-[10vh]">
				<div className="container mx-auto">
					<Navbar />
				</div>
			</Header>
			<Content className="bg-[#27344e]">
				<div className="container mx-auto relative w-[80%] h-[70vh] max-[600px]:w-[95%]" id="banner">
					<div className="absolute top-[50%] translate-y-[-50%] w-[50%] max-md:w-[90%] max-sm:w-[100%]">
						<h1 className="my-3 text-gray-100 font-extrabold text-6xl max-[600px]:w-[70%]">ENJOY THE PLAY</h1>
						<p className="my-3 text-gray-300 w-3/4 text-sm max-[600px]:text-xs">
							Stop spending all your free time on completing quests or leveling up your character. Schedule your carry today and complete any in-game activity in a few hours.
						</p>
						<Button className="mt-5 py-3 h-auto font-semibold bg-blue-600 rounded-sm	 border-none text-gray-100 hover:bg-blue-600">Choose the game <ArrowRightOutlined className="text-gray-100" /></Button>
					</div>
				</div>

				<div className="mt-10 py-5 bg-[#27344e] relative">
					<div className="bg-gradient-to-t from-[#27344e] absolute top-[-50px] h-[50px] w-full"></div>
					<div className="container mx-auto relative w-[80%]">
						<h2 className="font-medium text-gray-100">Choose your Game</h2>
						<Row gutter={[10, 10]}>
							{
								choose_your_game.map((item) => (
									<Col span={6} xs={24} md={12} sm={12} lg={6}>
										<a href="#" className="relative overflow-hidden block h-[135px] max-w-sm py-2 px-4 bg-white border-gray-200 rounded-lg shadow-m dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:scale-[1.03] transition-all">
											<div className="absolute top-0 left-0 h-full w-full">
												<div className="bg-card-gradient h-full w-full bg-cover max-[600px]:bg-center"></div>
											</div>
											<h5 className="mb-2 text-base font-medium tracking-tight text-gray-900 dark:text-white absolute bottom-0 transition-all max-[600px]:l-[10px] max-[600px]:text-[12px]">
												{item.name}
											</h5>
										</a>
									</Col>
								))
							}
						</Row>
					</div>
				</div>

				<section className="py-12 bg-[#27344e]" id="popular-orders">
					<div className="container mx-auto relative w-[80%]">
						<Space direction="horizontal" className="items-center justify-between w-full">
							<h2 className="font-medium text-gray-100">Popular Orders</h2>
							<div className="flex flex-row gap-3">
								<label className="select-none block p-2 cursor-pointer border-2 border-solid rounded-md border-gray-500 bg-transparent text-gray-400 hover:bg-gray-400 hover:text-gray-100 transition-all active:bg-blue-600 active:border-blue-600" htmlFor="swiper-popular-orders-button-prev">
									<LeftOutlined />
								</label>
								<label className="select-none block p-2 cursor-pointer border-2 border-solid rounded-md border-gray-500 bg-transparent text-gray-400 hover:bg-gray-400 hover:text-gray-100 transition-all active:bg-blue-600 active:border-blue-600" htmlFor="swiper-popular-orders-button-next">
									<RightOutlined />
								</label>
							</div>
						</Space>
						<Swiper
							slidesPerView={3}
							spaceBetween={10}
							pagination={{
								type: "fraction"
							}}
							modules={[Navigation]}
							speed={1000}
							className="popular-orders-swiper py-2"
							breakpoints={
								{
									550: {
										width: 550,
										slidesPerView: 1,
										spaceBetween: 10,
									},
									789: {
										width: 789,
										slidesPerView: 2,
										spaceBetween: 10,
									},
								}
							}
						>
							<SwiperButtonNext />
							<SwiperButtonPrevious />
							{
								popular_orders.map(
									(item: { id: number, title: string, image: string, description: string }) => (
										<SwiperSlide key={item.id} className="slide hover:-translate-y-1 transition-all">{CardComponent(item.title, item.description)}</SwiperSlide>
									)
								)
							}
						</Swiper>
					</div>
				</section>

				<section className="py-12 bg-[#27344e]" id="comments">
					<div className="container mx-auto relative w-[80%]">
						<h2 className="font-sm text-3xl m-0 text-gray-100 text-center">What our costumers say</h2>
						<p className="text-gray-300 text-center">
							Rated <strong className="text-green-500">4.9</strong>
							/
							5 based on <span className="underline">21,489 reviews</span>
						</p>
					</div>
					<div className="relative" id="constumers-comments">
						<div className="absolute top-0 left-0 w-[150px] h-full z-10 bg-gradient-to-r from-[#27344e]"></div>
						<div className="absolute top-0 right-0 w-[150px] h-full z-10 bg-gradient-to-l from-[#27344e]"></div>
						<Swiper
							slidesPerView={4}
							spaceBetween={10}
							pagination={{
								type: "fraction"
							}}
							modules={[Navigation]}
							className="z-0"
							loop={true}

							breakpoints={
								{
									580: {
										width: 580,
										slidesPerView: 1,
										spaceBetween: 5,
									},
									550: {
										width: 550,
										slidesPerView: 1,
										spaceBetween: 10,
									},
									789: {
										width: 789,
										slidesPerView: 2,
										spaceBetween: 10,
									},
									1290: {
										width: 1290,
										slidesPerView: 4,
									}
								}
							}
						>
							<SwiperSlide>
								{CommentsCards()}
							</SwiperSlide>
							<SwiperSlide>
								{CommentsCards()}
							</SwiperSlide>
							<SwiperSlide>
								{CommentsCards()}
							</SwiperSlide>
							<SwiperSlide>
								{CommentsCards()}
							</SwiperSlide>
							<SwiperSlide>
								{CommentsCards()}
							</SwiperSlide>
							<SwiperSlide>
								{CommentsCards()}
							</SwiperSlide>
							<SwiperSlide>
								{CommentsCards()}
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className="py-12 bg-[#27344e] relative my-5" id="faixa">
					<div className="container mx-auto relative w-[80%]">
						<div className="flex flex-row items-center bg-blue-600 px-9 py-3 rounded-lg justify-between z-10 relative">
							<span className="block text-left w-[35%]">
								<h2 className="font-sm text-3xl m-0 text-gray-100">Got any question?</h2>
								<p className="text-gray-300 w-3/4 text-sm my-2 font-light">
									Ask us in the live chat 24/7/365 in the live chat we can help you to
								</p>
							</span>
							<span className="block w-[10%] relative h-[100px]">
								<img className="absolute -top-9 left-0 -translate-x-2/4" src={headseat} alt="" width={200} />
							</span>
							<span className="block w-[30%]">
								<ul className="p-0 text-sm text-gray-100 font-light">
									<li className="mb-2">Choose the right service fou your needs</li>
									<li className="mb-2">Sell custom services not listed on the site</li>
									<li className="mb-2">Answer all your questions</li>
								</ul>
							</span>
							<span className="block w-[20%] text-center">
								<Button className="bg-transparent text-gray-100 text-lg px-8 h-auto hover:bg-gray-50 hover:text-gray-700">Chat Now</Button>
							</span>
						</div>
					</div>
				</section>

				<section className=" py-16 border-t-2 bg-banner-gradient  border-t-gray-600 border-solid border-b-2 border-b-gray-600 border-l-0 border-r-0" id="banner">
					<div className="text-center">
						<h1 className="text-4xl text-gray-50">Join 278,590 of gamers <br /> using Fastloot</h1>
						<p className="text-gray-300 font-light">
							Spend your precious time having fun in your favorite <br /> game and let Overgear take core of the rest
						</p>
						<Button className="mt-5 py-3 h-auto font-semibold bg-blue-600 rounded-sm	 border-none text-gray-100 hover:bg-blue-600">Choose the game</Button>
					</div>
				</section>

			</Content>
			<Footer className="bg-[#27344e]">
				<div className="container mx-auto relative w-[80%] py-8">
					<Row>
						<Col span={6}>
							<p className="text-gray-300"><strong>Company</strong></p>
							<Space direction="vertical">
								<a href="#" className="text-gray-400 font-extralight">About</a>
								<a href="#" className="text-gray-400 font-extralight">Blog</a>
								<a href="#" className="text-gray-400 font-extralight">Press</a>
								<a href="#" className="text-gray-400 font-extralight">Colleges</a>
								<a href="#" className="text-gray-400 font-extralight">Become a Sensei</a>
								<a href="#" className="text-gray-400 font-extralight">Become an Afiliate</a>
							</Space>
						</Col>
						<Col span={6}>
							<p className="text-gray-300"><strong>Support</strong></p>
							<Space direction="vertical">
								<a href="#" className="text-gray-400 font-extralight">Contact</a>
								<a href="#" className="text-gray-400 font-extralight">Terms of Service</a>
								<a href="#" className="text-gray-400 font-extralight">Privacy Policy</a>
							</Space>
						</Col>
						<Col span={6}>
							<p className="text-gray-300"><strong>Games</strong></p>
							<Space direction="vertical">
								<a href="#" className="text-gray-400 font-extralight">WoW: Classic</a>
								<a href="#" className="text-gray-400 font-extralight">WoW: Battle for Azheroth</a>
								<a href="#" className="text-gray-400 font-extralight">Destiny 2</a>
								<a href="#" className="text-gray-400 font-extralight">StarCraft 2</a>
								<a href="#" className="text-gray-400 font-extralight">The Division 2</a>
								<a href="#" className="text-gray-400 font-extralight">Apex Legends</a>
								<a href="#" className="text-gray-400 font-extralight">Diablo Immortal</a>
								<a href="#" className="text-gray-400 font-extralight">Path of Exile</a>
							</Space>
						</Col>
						<Col span={6}>
							<p className="text-gray-300"><strong>Let's stay in touch</strong></p>
							<Space direction="horizontal" className="gap-6">
								<a href="#" className="text-gray-400 font-extralight text-xl">
									<FaDiscord />
								</a>
								<a href="#" className="text-gray-400 font-extralight text-xl">
									<FaFacebookSquare />
								</a>
								<a href="#" className="text-gray-400 font-extralight text-xl">
									<FaTwitter />
								</a>
								<a href="#" className="text-gray-400 font-extralight text-xl">
									<FaYoutube />
								</a>
							</Space>
						</Col>
					</Row>
				</div>
				<div className="border-solid border-t-2 border-t-slate-600 py-4 border-l-0 border-r-0 border-b-0">
					<p className="font-light text-center text-slate-500 m-0">© 2022 Fastloot. All rights reserved.</p>
				</div>
			</Footer>
		</div>
	)
};

export default App;


const CardComponent = (title: string, description: string,) => {
	return (
		<a href="#" className="relative overflow-hidden block h-[200px] max-w-sm py-2 px-4 bg-white border-gray-200 rounded-lg shadow-m dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all">
			<div className="absolute top-5 left-5 z-10 px-2 py-1 bg-orange-500 rounded-md">
				<Space>
					<FireFilled className="font-bold text-gray-100" style={{ fontSize: "15px" }} />
					<p className="m-0 text-gray-100 font-semibold text-xs max-[550px]:text-[10px]">
						Hot offering
					</p>
				</Space>
			</div>
			<div className="absolute top-0 left-0 h-full w-full">
				<div className="bg-card-gradient h-full w-full bg-cover"></div>
			</div>
			<div className="absolute bottom-0 left-0 px-5">
				<h5 className="mb-1 text-xl mt-0 font-medium tracking-tight max-[549px]:text-xs text-gray-900 dark:text-white">
					Apex: Rank Boost
				</h5>
				<Space direction="horizontal" className="flex items-start max-[600px]:hidden">
					<p className="text-xs mb-5 mt-0 text-gray-300">
						Boost to any rank, event to a Predator!
						Bronze - Diamond rank climb can be done in less than 3 days
					</p>
					<Button className="border-1 border-gray-300 bg-transparent text-gray-300 h-[40px]" style={{ width: "40px" }} icon={<RightOutlined />}></Button>
				</Space>
			</div>
		</a>
	);
}

const SwiperButtonNext = () => {
	const swiper = useSwiper();
	return <input className="hidden" id="swiper-popular-orders-button-next" type="button" onClick={() => swiper.slideNext()} />;
};

const SwiperButtonPrevious = () => {
	const swiper = useSwiper();
	return <input className="hidden" id="swiper-popular-orders-button-prev" type="button" onClick={() => swiper.slidePrev()} />;
};

const CommentsCards = () => {
	return (
		<a href="#" className="block max-w-sm px-3 py-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 no-underline">
			<div className="">
				<div className="border-b-2 border-solid border-transparent border-b-gray-700 pb-3 flex flex-row items-center justify-between">
					<span>
						<StarFilled className="text-green-500" />
						<StarFilled className="text-green-500" />
						<StarFilled className="text-green-500" />
						<StarFilled className="text-green-500" />
						<StarFilled className="text-green-500" />
					</span>
					<p className="text-xs m-0 text-gray-400 no-underline">2 days go</p>
				</div>
				<h4 className="text-gray-300 mt-2 mb-0">Magetower</h4>
				<p className="text-gray-400 text-xs mt-2 text-left font-light">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem iusto eos nobis nesciunt. Facilis iste, esse accusantium accusamus obcaecati fugit libero vel dolorum itaque quos, eos, vero nobis nemo?
				</p>
			</div>
		</a>
	);
}