import work1 from "../../assets/recent-work/work1.png";
import work2 from "../../assets/recent-work/work2.png";
import work3 from "../../assets/recent-work/work3.jpeg";
import work4 from "../../assets/recent-work/work4.png";

interface RecentWorkListProps {
    image: string;
    creditLink: string;
}

export const RecentWorkList: RecentWorkListProps[] = [
    {image: work1, creditLink: "https://dribbble.com/shots/22988618-Luma-Landing-Page"},
    {image: work2, creditLink: "https://dribbble.com/shots/22875945-Podcasts-Platform-UI"},
    {image: work3, creditLink: "https://dribbble.com/shots/22970818-Stylee-Fashion-Landing-Page"},
    {image: work4, creditLink: "https://dribbble.com/shots/22988618-Luma-Landing-Page"},
]