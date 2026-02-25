import ThreeDCarousel, { ThreeDCarouselItem } from "./ThreeDCarousel";

const galleryItems: ThreeDCarouselItem[] = [
    {
        id: 1,
        brand: "Cyberthon '24",
        title: "Highlights",
        description: "The ultimate frontier for cybersecurity innovation. Where elite hackers build the digital future.",
        tags: ["Hacking", "Network", "Security"],
        imageUrl: "/1.png",
        link: "#"
    },
    {
        id: 2,
        brand: "Workshop Phase",
        title: "Deep Dive",
        description: "Intensive training sessions led by industry experts to prepare participants for the final showdown.",
        tags: ["Learning", "Expertise", "Skill"],
        imageUrl: "/2.JPG",
        link: "#"
    },
    {
        id: 3,
        brand: "Final Showcase",
        title: "The Battle",
        description: "Witness the intensity of the final 24-hour hackathon where champions are forged in code.",
        tags: ["Hackathon", "Intensity", "Win"],
        imageUrl: "/3.JPG",
        link: "#"
    },
    {
        id: 4,
        brand: "Network Hub",
        title: "Connection",
        description: "Bridging the gap between talented individuals and leading corporations in the tech industry.",
        tags: ["Networking", "Careers", "Connect"],
        imageUrl: "/4.JPG",
        link: "#"
    },
    {
        id: 5,
        brand: "Innovation Lab",
        title: "Creative Solutions",
        description: "Exploring groundbreaking ideas and developing tools to protect the future of the web.",
        tags: ["Innovation", "Future", "Web3"],
        imageUrl: "/5.JPG",
        link: "#"
    }
];

export default function Gallery() {
    return (
        <ThreeDCarousel
            items={galleryItems}
            title="EVENT GALLERY"
            subtitle="/// VISUAL_LOGS"
            tagline="Relive the intensities of previous Cyberthon events. From high-stakes hackathons to networking masterpieces."
        />
    );
}
