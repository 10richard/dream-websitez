import gearsAnimation from "../../assets/animations/gears.json";
import infinityAnimation from "../../assets/animations/infinity.json";
import responsiveAnimation from "../../assets/animations/responsive.json";


interface BenefitsListProps {
    heading: string;
    description: string;
    animation: any;
}

export const BenefitsList: BenefitsListProps[] = [
    {heading: "Customized Design", 
    description: "Crafted to embody your unique brand and values.", 
    animation: gearsAnimation},
    {heading: "Unlimited Revisions", 
    description: "Polish your website until it's flawless. Your vision, our dedication.", 
    animation: infinityAnimation},
    {heading: "Responsive Design", 
    description: "Consistent user experience across all devices.", 
    animation: responsiveAnimation}
]