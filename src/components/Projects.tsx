import Card from "./Card";
import Heading from "./Heading";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "🛒 E-Commerce Interface",
    desc: "Developed a Next.js UI storefront template with API integration and dynamic data rendering for e-commerce features like promotional banners.",
    img: "/e-commerce.png",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "API Integration",
      "E-Commerce UI",
    ],
    link: "https://hackathon-3-api-integration-38sh.vercel.app/",
  },
  {
    id: 2,
    title: "🧩 PixelCraft",
    desc: "PixelCraft is a UI/UX design project built in Figma, focused on creating a clean, responsive, and user-friendly interface also showcases a layout structure.",
    img: "/pixel_craft.jpg",
    tags: ["Html", "CSS", "Python", "OpenAI Agent SDK", "Next.js", "TailwindCSS"],
    link: "https://figmadesign-sage.vercel.app/",
  },
  {
    id: 3,
    title: "🤖 Smart Support Bot",
    desc: "An intelligent support assistant that handles FAQs, tracks orders, and escalates complex queries to humans using the OpenAI Agent framework SDK.",
    img: "/smart_support_agent.jpg",
    tags: ["Python", "OpenAI Agent SDK", "AI Assistant", "Customer Support"],
    link: "https://github.com/Hamzaaleem230/OpenAi_Agent_SDK_Assignments/tree/main/Assignment%2006%20Build%20a%20Smart%20Customer%20Support%20Bot%20using%20OpenAI%20Agent%20SDK",
  },
  {
    id: 4,
    title: "🧠 Dynamic AI Agent",
    desc: "A smart agent that converts static instructions into dynamic responses, enabling adaptive workflows and real-time decision-making throughput.",
    img: "/dynamic_agent.png",
    tags: [
      "Python",
      "OpenAI Agent SDK",
      "Dynamic Instructions",
      "AI Workflows",
    ],
    link: "https://github.com/Hamzaaleem230/OpenAi_Agent_SDK_Assignments/tree/main/Assignment%2009%20Convert%20static%20to%20dynamic%20instructions",
  },
  {
    id: 5,
    title: "🔡 Morse Code Learner",
    desc: "An interactive web app to learn and practice Morse Code in real-time. Built with clean HTML, CSS, and JavaScript for smooth user experience.",
    img: "/morse_code_learner.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Learning Tool", "Responsive Design"],
    link: "https://morse-code-learner.vercel.app/",
  },
  {
    id: 6,
    title: "💧 Shine Drink Water",
    desc: "A simple, responsive water reminder app designed with Tailwind CSS for a clean and modern UI. Helps users stay hydrated with timely alerts.",
    img: "/shine_drink_water.jpg",
    tags: ["HTML5", "CSS3", "Responsive Design", "UI/UX", "Wellness"],
    link: "https://shine-drink-water.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container px-4 sm:px-[-10px] md:px-8 pt-[210px] text-cyan-300">
      <Heading title="My Projects" />
      <div className="grid gap-10 sm:gap-12 md:gap-16 md:grid-cols-2 xl:grid-cols-3 place-items-center pt-14">
        {data.map((el) => (
          <div
            key={el.id}
            className="flex flex-col items-center justify-between bg-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-sm"
            data-aos="fade-up"
          >
            <Card
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            />
            <Link
              href={el.link}
              target="_blank"
              className="mt-6 w-full text-center px-6 py-3 rounded-2xl bg-[#F3B806] text-gray-900 font-semibold border border-[#F3B806] hover:bg-[#d99a05] transition-all"
            >
              Check out ⟶
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


