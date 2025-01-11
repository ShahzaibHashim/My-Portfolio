import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <div id='Projects' className='text-gray-600 body-font bg-gray-100'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            My Projects
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-10 -m-5rem">
                        {/* Projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/Digital Marketing.png')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Digital Marketing
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Digital Marketing and SEO
                                    </h1>
                                    <p className="leading-relaxed line-clamp-3">
                                        Digital marketing uses online platforms like social media, email, and websites to promote products and engage audiences. SEO enhances website visibility on search engines by optimizing content and performance. Together, they drive traffic, boost brand awareness, and increase conversions.                                    </p>
                                    <Link href={'https://www.linkedin.com/in/shahzaibhashim/'} target="_blank">
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/Ecommerce.PNG')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        E-commerce Website
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shopping Website For E-commerce
                                    </h1>
                                    <p className="leading-relaxed line-clamp-3">
                                        I developed a fully functional Ecommerce Shopping Website using TypeScript and Next.js, focusing on creating a seamless and user-friendly shopping experience. The platform integrates modern web technologies to ensure high performance, scalability, and secure transactions.                                    </p>
                                    <Link href={'https://ecommerce-website-shopping.vercel.app/'}>
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/Dynamic Blogwebsite.PNG')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Blog Website
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Dynamic Blog Website
                                    </h1>
                                    <p className="leading-relaxed line-clamp-3">
                                        I designed and built a Dynamic Blog Website that allows users to create, manage, and interact with blog content effortlessly. The platform is optimized for performance and provides a responsive and engaging user experience                                    </p>
                                    <Link href={'https://dynamic-blogwebsite-milestone3.vercel.app/'}>
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/Resume.PNG')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Resume Builder
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Static Interaction Resume
                                    </h1>
                                    <p className="leading-relaxed line-clamp-3">
                                        I've created a Static Resume Project using Next.js, CSS, HTML, and TypeScript. This project features a clean and minimal design, focusing on performance and structure.
                                    </p>
                                    <Link href={'https://static-interactive-resume-builder-iwsjgt7ag.vercel.app'}>
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/Ecommerce Furniture.PNG')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Ecommerce Website
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        E-commerce Website of Furniture
                                    </h1>
                                    <p className="leading-relaxed line-clamp-3">
                                        I developed a specialized Ecommerce Website for Furniture, featuring an elegant design and user-friendly interface. The platform allows customers to explore a wide range of furniture products, enabling smooth navigation, secure transactions, and a seamless shopping experience.                                    </p>
                                    <Link href={'https://hackathone-furnitures.vercel.app/'}>
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Projects */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/Shareable Resume Builder.PNG')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Resume Builder
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Static Interaction Resume
                                    </h1>
                                    <p className="leading-relaxed line-clamp-3">
                                    I created a Shareable Resume Builder that empowers users to design and generate professional resumes effortlessly. The tool features customizable templates, real-time previews, and an intuitive interface for seamless resume creation and sharing.                                    </p>
                                    <Link href={'https://unique-path-and-shareable-link-dusky.vercel.app/'}>
                                        <p className="leading-relaxed text-blue-500 hover:underline">
                                            View Project
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects