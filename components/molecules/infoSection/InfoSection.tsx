import Title from "@/components/atomic/Title";
import Text from "@/components/atomic/Text";

type InfoSectionProps = {
    title: string;
    content: string; 
  };

export default function InfoSection({ title, content }: InfoSectionProps) {
    return (
        <section className="mb-6">
            <Title text={title} />
            <Text content={content} />
        </section>
    )
}