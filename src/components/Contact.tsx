import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
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
    <section className="max-md:px-5 relative flex flex-col justify-center items-center py-10 z-30 mb-20">
      <SectionTitle>Contact</SectionTitle>
      <h3 className="text-3xl font-bold mb-2">Get In Touch</h3>
      <p className="mx-auto max-w-[600px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Want to reach out?{" "}
        <a
          className="text-bluish hover:underline"
          href="mailto:osmanshek@gmail.com"
        >
          Send me an email
        </a>
        . I’ll do my best to reply soon. I’m always open to genuine
        conversations and collaborations, but I don’t respond to sales or spam.
      </p>
      <div className="relative isolate mt-6">
        <Button
          onClick={handleDownload}
          size="lg"
          className="font-bold hover:bg-bluish text-xl text-foreground border-0 dark:text-background cursor-pointer bg-bluish dark:border-0 active:translate-1 z-10"
        >
          Download Resume
        </Button>
        <div className=" bg-foreground absolute inset-0 rounded-full -z-10 h-10 translate-1" />
      </div>
    </section>
  );
}
