interface PricingListProps {
    name: string;
    price: string;
    included: string[];
}


// Display all perks, but have them Checked or Xed depending on the membership tier
// Will have to probably redo data types

// Standard
// Pro
export const PricingList: PricingListProps[] = [
    {name: "Standard", price: "2995", included: ["Custom Website", "Custom Logo", "Responsive Development", "Social Media Integration", "Standard Assistance", "Basic SEO Optimization"]},
    {name: "Premium", price: "4995", included: ["Custom Website", "Custom Logo", "Responsive Development", "Social Media Integration", "Priority Assistance", "Advanced SEO Optimization"]}
]