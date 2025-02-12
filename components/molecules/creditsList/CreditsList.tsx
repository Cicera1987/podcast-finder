import Link from "next/link"

type Credit = {
    name: string;
    link: string;
  };
  
  type CreditsListProps = {
    credits: Credit[]; 
  };

export default function CreditsList({ credits }: CreditsListProps) {
    return (
        <ul className="list-disc pl-6">
            {credits.map((credit, index) => (
                <li key={index}>
                    <Link href={credit.link}>{credit.name}</Link> 
                </li>
            ))}
        </ul>
    )
}