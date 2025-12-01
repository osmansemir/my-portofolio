import SectionTitle from "@/components/SectionTitle";
import { Button } from "./ui/Button";
import ReactGA from "react-ga4";

export default function Contact() {
  const handleDownload = () => {
    ReactGA.event({
      category: "CV",
      action: "Download",
      label: "CV_PDF_Download",
    });

    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}resume.pdf`;
    link.download = "Osman_Semir_CV.pdf";
    link.click();
  };
  return (
    <section className="relative flex flex-col justify-center items-center py-10 z-30 mb-20">
      <SectionTitle>Contact</SectionTitle>
      <h3 className="text-3xl font-bold mb-2">Get In Touch</h3>
      <p className="mx-auto max-w-[600px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Want to reach out?{" "}
        <a
          className="text-blue-500 hover:underline"
          href="mailto:osmanshek@gmail.com"
        >
          Send me an email
        </a>
        . I’ll do my best to reply soon. I’m always open to genuine
        conversations and collaborations, but I don’t respond to sales or spam.
      </p>
      <Button
        onClick={handleDownload}
        variant="default"
        size="lg"
        className="mt-4  cursor-pointer"
      >
        Download CV
      </Button>
      <Button variant="destructive" size="lg" className="mt-4  cursor-pointer ">
        destructive
      </Button>
      <Button variant="primary" size="lg" className="mt-4  cursor-pointer ">
        primary
      </Button>
      <Button variant="outline" size="lg" className="mt-4  cursor-pointer ">
        outline
      </Button>
    </section>
  );
}
