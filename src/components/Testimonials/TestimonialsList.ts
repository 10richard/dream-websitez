import samanthaL from "../../assets/face-pics/samantha-l.png";
import michaelK from "../../assets/face-pics/michael-k.png";
import jessicaR from "../../assets/face-pics/jessica-r.png";
import edwardH from "../../assets/face-pics/edward-h.png";
import emilyG from "../../assets/face-pics/emily-g.png";
import johnM from "../../assets/face-pics/john-m.png";
import sarahD from "../../assets/face-pics/sarah-d.png";
import seanS from "../../assets/face-pics/sean-s.png";

interface TestimonialsListProps {
    name: string;
    review: string;
    portrait: string;
    highlighted?: string;
}

export const TestimonialsList: TestimonialsListProps[]  = [
    {name: "Samantha L.", 
    review: "I am thoroughly impressed with the quality of service provided by Dreamwebsitez. Their efficient communication and quick turnaround time made the entire experience smooth and hassle-free. I highly recommend them for anyone seeking a top-notch website!", 
    portrait: samanthaL,
    highlighted: "Absolutely thrilled with the results! The team's dedication to excellence and attention to detail truly set them apart. Our website has never looked better!"},
    {name: "Michael K.", 
    review: "Working with Dreamwebsitez was an absolute pleasure. Their professionalism and attention to detail were evident throughout the entire process. I highly recommend their services!", 
    portrait: michaelK},
    {name: "Jessica R.", 
    review: "Dreamwebsitez exceeded my expectations in every way. They not only delivered a stunning website but also provided valuable insights on optimizing user experience. I couldn't be happier with the results!", 
    portrait: jessicaR},
    {name: "Edward H.", 
    review: "Thanks to Dreamwebsitez, my business has experienced a significant boost in online traffic and engagement. Their strategic approach to design and development is truly commendable. I look forward to future collaborations!", 
    portrait: edwardH},
    {name: "Emily G.", 
    review: "Dreamwebsitez truly made my dream a reality! Their team's creativity and expertise resulted in a website that perfectly represents my brand. I'm thrilled with the outcome!", 
    portrait: emilyG},
    {name: "John M.", 
    review: "Dreamwebsitez transformed our online presence! Their attention to detail and creative approach made our website stand out. Highly recommended!", 
    portrait: johnM},
    {name: "Sarah D.", 
    review: "Working with Dreamwebsitez was a breeze! Their professional team not only delivered a stunning website but also provided valuable insights for our digital strategy. Exceptional service!", 
    portrait: sarahD},
    {name: "Sean S.", 
    review: "Working with Dreamwebsitez was an absolute pleasure. Their team's dedication to delivering a top-quality website was evident in every detail. They transformed our vision into a digital masterpiece, and we couldn't be happier.", 
    portrait: seanS},
]