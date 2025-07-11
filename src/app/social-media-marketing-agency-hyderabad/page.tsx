export const metadata = {
    title: "Social Media Marketing Company in Hyderabad | Instagram & Facebook Ads | Bixeltek",
    description:
        "Elevate your brand with Bixeltek, Hyderabad’s leading social media management agency. Specialized in Instagram ads, Facebook ads, and tailored social media marketing services to drive business growth and conversions.",
    keywords:
        "Bixeltek social media, Social media management Hyderabad, Best social media agency Hyderabad, Instagram marketing, Facebook ads, LinkedIn marketing, Twitter management, Social media strategy, Content creation, Brand growth, Online presence",
    openGraph: {
        title: "Bixeltek | Expert Social Media Marketing Services in Hyderabad",
        description:
            "Boost your brand’s online presence with Bixeltek’s professional social media management services. Drive engagement, increase reach, and build a strong brand identity.",
        type: "website",
    },
};
export const dynamic = "force-dynamic";
import CarouselSection from "@/components/industriescarosel";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import Link from "next/link";
import ContactFrom from "@/components/ContactFrom";
import HowItWorks from "@/components/howitworksSm";
import LightFaqSection from "@/components/LightFaq";
import Image from "next/image";
import cursorimg from '@/assets/images/cursor.png';
import StackingCarousel from "@/components/horcaroselSm";
import messageimage from '@/assets/images/message.png'
import { Toaster } from "react-hot-toast";
export default function SocialMedia() {


    const faqs = [
        {
            question: "Which social media platforms does Bixeltek manage?",
            answer: "Bixeltek expertly manages Instagram, Facebook, LinkedIn, Twitter, and other major social media platforms tailored to your needs.",
        },
        {
            question: "Can Bixeltek tailor social media campaigns specifically for my business?",
            answer: "Yes! Our agency specializes in developing highly customized social media strategies aligned with your specific goals and target audience in Hyderabad.",
        },
        {
            question: "How quickly will I see results?",
            answer: "Typically, clients begin to see noticeable results within the first few weeks of launching a campaign, with significant improvements becoming evident over 2-3 months.",
        },
        {
            question: "What is included in your monthly reporting?",
            answer: "Our comprehensive monthly reports include detailed analytics, performance metrics, audience insights, campaign effectiveness, and actionable recommendations.",
        },
        {
            question: "Do you provide photo and video content services?",
            answer: "Yes, we offer professional photo and video production services tailored specifically for social media platforms to enhance your visual content strategy.",
        },
        {
            question: "How do you determine the right social media strategy for my business?",
            answer: "We conduct an initial discovery session, analyzing your business objectives, market competition, audience behavior, and previous social media performance to develop a tailored strategy.",
        },
        {
            question: "Can Bixeltek help manage social media ads budget?",
            answer: "Absolutely! We optimize and manage your advertising budgets carefully, ensuring you achieve maximum ROI from your Instagram, Facebook, LinkedIn, and Twitter ad campaigns.",
        },
        {
            question: "Do I have to commit to a long-term contract?",
            answer: "We offer flexible contract options, including month-to-month plans, allowing you to scale or adjust services as needed.",
        },
    ];


    return (
        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <section className="bg-black h-auto text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] pt-[72px] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full z-30 h-40 bg-gradient-to-t from-black to-transparent"></div>
                <div className="container relative mx-auto px-4">
                    <div className="flex items-center justify-center">
                        <a href="#" className="border py-1 px-2 inline-flex gap-3 rounded-lg border-white/30">
                            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                                Transform Your Social Media Presence
                            </span>
                        </a>
                    </div>

                    {/* Ensure images do not cause overflow */}
                    <div className="flex justify-center mt-8 relative">
                        <div className="relative w-full max-w-5xl px-4">
                            <Image src={cursorimg} alt="cursor" height={200} width={200} className="absolute right-[876px] top-[108px] hidden md:inline" />
                            <Image src={messageimage} alt="message" height={200} width={200} className="absolute left-[85%] top-[106px] hidden md:inline" />
                            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter text-center">
                                Top Social Media Marketing Agency in Hyderabad
                            </h1>
                        </div>
                    </div>

                    <p className="text-center text-sm md:text-xl mt-8 max-w-[650px]  m-auto">
                        Partner with Hyderabad&apos;s premier social media management agency to drive growth, engagement, and conversions through targeted Instagram ads, Facebook ads, and more.
                    </p>

                    <div className="flex justify-center mt-6 mb-3">
                        <Link href={'/contact-us'}>
                            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get a quote</button>
                        </Link>
                    </div>
                </div>

                <div className="bg-[#7b00e0] max-w-[80%] mt-20  pt-2 md:pt-5 mx-auto shadow-purple-custom2 rounded-t-2xl">
                    <div className="max-w-[97%] pt-4 md:pt-10 pb-5  px-5 mx-auto bg-black rounded-t-2xl flex flex-col lg:flex-row justify-center items-center">
                        {/* Left side */}
                        <div className=" w-full md:w-1/2 flex flex-col">
                            <h2 className="text-xl md:text-2xl lg:text-4xl text-white mt-4 md:mt-10 mx-2 md:mx-5 lg:mx-7">
                                <span className="text-[#7b00e0]">Rank Higher, Get More Traffic</span> & Skyrocket Your Business Growth
                            </h2>
                            <div className="flex mt-10 md:mt-20 mb-6 mx-2 px-0 gap-8">
                                <div className=" w-1/2 flex flex-col text-white">
                                    <h1 className="text-[#6728cc] text-3xl md:text-5xl font-semibold">278%</h1>
                                    <p className="text-gray-100 text-sm mt-2">Increase in organic traffic <br /> within six months for our clients</p>
                                </div>
                                <div className="w-1/2 flex flex-col text-white">
                                    <h1 className="text-[#6728cc] text-3xl md:text-5xl font-semibold">4.2X</h1>
                                    <p className="text-gray-100 text-sm mt-2">
                                        Higher lead conversions from targeted SEO campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="w-full md:w-1/2 pb-10 md:pb-0">
                            <ul className="flex flex-col text-gray-100 gap-10 px-2 md:px-6">
                                <li className="flex items-start gap-4 text-sm md:text-[16px]">
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-[-17px] text-6xl" />
                                    <span>
                                        <span className='font-semibold'>Is your website struggling to generate leads and sales?</span> You&apos;re not alone. Over 91% of online content gets zero traffic from Google, meaning businesses without a strong SEO strategy are missing out on valuable customers.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4 text-2xl ml-8 ">
                                    <span>
                                        <Link href={'#'}>Want to dominate search engine rankings? <span className='text-[#670ef7]'>Get a Free SEO Audit today!</span> </Link>
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Background Gradient Fix */}
                {/* <div className="absolute h-[300px] w-[600px] md:w-[1200px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100% - 96px)] md:top-[calc(100% - 120px)]">
                </div> */}
            </section>
            <section className=" pt-8 flex justify-center items-center max-w-[100%] md:max-w-[85%] mx-auto text-white sm:py-24">
                <div className="mx-auto flex max-w-md flex-col md:flex-row justify-center items-center rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="w-full md:w-1/2 px-4 pb-10 md:pb-0 lg:pr-24">
                        <h3 className="mb-2 text-purple-600">Why Choose Us?</h3>
                        <h2 className="mb-5 text-3xl font-semibold"> Why Bixeltek is Hyderabad&apos;s Trusted Social Media Marketing Agency</h2>
                        <p className="mb-16 text-sm md:text-lg text-gray-50">Bixeltek stands out as a leading social media management agency in Hyderabad, known for innovative strategies, exceptional creativity, and measurable results. Our specialized team delivers bespoke solutions designed to meet the unique needs of Hyderabad&apos;s dynamic market.</p>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Experienced Professionals</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50">Skilled social media strategists with deep expertise in Hyderabad&apos;s local business ecosystem.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Result-Oriented Approach</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50"> Proven success stories of significantly improving online visibility and conversion rates.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Comprehensive Solutions</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50">End-to-end social media management and marketing tailored specifically to your business goals.</span>
                            </div>
                        </div>
                    </div>
                    <ContactFrom />
                </div>
            </section>

            <section className="py-20 w-full">
                <div className="flex justify-center items-center">
                    <h2 className="text-white text-center text-5xl font-sofiasanscondensed">Our Specialized Social Media Management Services</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row py-24 bg-black">
                    <div className="relative w-full ml-auto mt-6 md:!mt-0 md:-mr-[68px] md:w-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto w-[90%] md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#FFCE1B"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-xl mt-16 md:text-lg font-semibold text-[#FFCE1B] mx-2 dark:text-white md:my-2">
                                Strategic Content<span className="text-[#FFCE1B]"> Creation & Management </span>
                            </h1>
                            <p className="w-full md:text-sm text-sm my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Drive meaningful engagement through expertly curated content designed specifically for Hyderabad&apos;s diverse audience.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full mt-6 md:w-auto md:mt-[141px] md:-mr-[21px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto  w-[90%] md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#0096FF"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-xl mt-16 md:text-lg font-semibold text-[#0096FF] mx-2 dark:text-white md:my-2">
                                Instagram & Facebook  <span className="text-[#0096FF]">Ads Management </span>
                            </h1>
                            <p className="w-full md:text-sm text-sm my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Expand your reach and attract quality leads with precision-targeted Instagram and Facebook advertising campaigns tailored to Hyderabad demographics.                        </p>
                        </div>
                    </div>

                    <div className="relative w-full mt-6 md:!mt-0 md:!w-auto md:-ml-[48px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto  w-[90%] md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#FF5733"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0  text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-2xl mt-16 md:text-xl font-semibold  dark:text-white md:my-2">
                                Professional <span className="text-[#FF5733]">Photo & Video</span> Production
                            </h1>
                            <p className="w-full md:text-sm text-sm my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Amplify your brand storytelling through professionally crafted photos and video content, resonating with Hyderabad consumers.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full mt-6 md:w-auto md:-ml-[302px] md:mt-[283px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto  w-[95%] md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#FF5733"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>                    <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-2xl mt-16 md:text-xl font-semibold  dark:text-white md:my-2">
                                Landing Page <span className="text-[#FF5733]">Development & Optimization</span>
                            </h1>
                            <p className="w-full md:text-sm text-sm my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Maximize conversions with expertly designed landing pages aligned perfectly with your social media campaigns, optimized to capture leads effectively.</p>
                        </div>
                    </div>

                    <div className="relative w-full mt-6 md:w-auto md:mt-[141px] md:-ml-[68px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto  w-[90%] md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#0096FF"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>                    <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                                Conversion Rate Optimization<span className="text-[#0096FF]"> (CRO)</span>
                            </h1>
                            <p className="w-full md:text-sm text-sm my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Enhance your social media effectiveness by optimizing campaigns to deliver higher engagement, clicks, and sales conversions.</p>
                        </div>
                    </div>

                    <div className="relative w-full mr-auto mt-6 md:!mt-0 md:w-auto md:-ml-[68px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto  w-[90%] md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#FFCE1B"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>                    <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                                Comprehensive<span className="text-[#FFCE1B]"> Analytics & Reporting</span>
                            </h1>
                            <p className="w-full md:text-sm text-sm my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Transparent monthly reporting offering actionable insights and data-driven recommendations to improve social media performance continuously.
                            </p>
                        </div>
                    </div>
                </div>
            </section >
            <HowItWorks />
            <StackingCarousel />
            <CarouselSection />
            <section className="pt-2 pb-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row"
                    >
                        <div className="block text-center mb-5 lg:text-left lg:mb-0">
                            <h2
                                className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                            >
                                Ready to Elevate Your Social Media?
                            </h2>
                            <p className="text-xl max-w-2xl text-indigo-100">
                                Partner with Hyderabad&apos;s premier social media management agency to unlock new opportunities.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
                        >Get In Touch
                            <svg
                                width="19"
                                height="14"
                                viewBox="0 0 19 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                    stroke="#4F46E5"
                                    stroke-width="2.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <LightFaqSection faqs={faqs} />
        </>

    );
}