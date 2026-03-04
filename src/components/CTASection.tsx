import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-foreground leading-tight tracking-tight mb-4">
          Ready to transform your
          <br />
          data pipeline?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Book a demo with our team and see agentii.Solutions in action.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Contact Us</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
