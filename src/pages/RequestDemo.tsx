import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckSquare2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const requestDemoSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60, "Use 60 characters or fewer"),
  lastName: z.string().trim().min(1, "Last name is required").max(60, "Use 60 characters or fewer"),
  jobTitle: z.string().trim().min(1, "Job title is required").max(100, "Use 100 characters or fewer"),
  company: z.string().trim().min(1, "Company is required").max(100, "Use 100 characters or fewer"),
  email: z.string().trim().email("Enter a valid work email").max(255, "Use 255 characters or fewer"),
  country: z.string().trim().min(1, "Select a country"),
  interests: z.string().trim().max(500, "Use 500 characters or fewer").optional(),
});

type RequestDemoValues = z.infer<typeof requestDemoSchema>;

const highlights = [
  "Industry-specific workflows for document, video, audio, and synthetic data pipelines",
  "Data maps that help agents reason, retrieve, and calculate on structured outputs",
  "A practical rollout path from pilot datasets to governed production delivery",
];

const outcomes = [
  { label: "Faster dataset delivery", value: "10×" },
  { label: "Higher retrieval precision", value: "75%" },
  { label: "Lower review overhead", value: "48%" },
];

const countries = ["United States", "Canada", "United Kingdom", "Germany", "Singapore", "Japan", "Australia"];

const signalColors = [
  "bg-primary",
  "bg-purple",
  "bg-teal",
  "bg-cyan",
  "bg-primary-light",
  "bg-lilac-dark",
  "bg-teal-light",
  "bg-purple-light",
];

const RequestDemo = () => {
  const { toast } = useToast();

  const form = useForm<RequestDemoValues>({
    resolver: zodResolver(requestDemoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      company: "",
      email: "",
      country: "",
      interests: "",
    },
  });

  const onSubmit = (values: RequestDemoValues) => {
    toast({
      title: "Demo request ready",
      description: `Thanks ${values.firstName} — your request is validated in the UI and ready for backend wiring.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar tone="demo" />
      <main>
        <section className="border-b border-border bg-lilac-light pt-28 md:pt-32">
          <div className="container mx-auto px-6 pb-20 lg:px-12 lg:pb-24">
            <div className="max-w-[860px]">
              <p className="font-mono-data text-[11px] font-medium uppercase tracking-[0.28em] text-lilac-dark">
                Request a demo
              </p>
              <h1 className="mt-6 font-brand text-[44px] leading-[0.98] tracking-[-0.03em] text-foreground md:text-[60px] lg:text-[72px]">
                Book a demo with our experts.
              </h1>
              <p className="mt-6 max-w-[760px] text-lg leading-8 text-foreground/80 md:text-[20px]">
                See how agentii.Solutions structures document, video, audio, and synthetic data into machine-readable outputs for agentic systems.
              </p>
            </div>
          </div>

          <div className="h-3 w-full overflow-hidden border-t border-foreground/10 bg-background/30">
            <div className="mx-auto grid h-full max-w-[1280px] grid-cols-8 gap-1 px-6 lg:px-12">
              {signalColors.map((color, index) => (
                <span key={`${color}-${index}`} className={`${color} h-full`} aria-hidden="true" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_420px] lg:items-start">
              <div className="space-y-10">
                <div className="max-w-[760px]">
                  <h2 className="font-brand text-[34px] leading-[1.04] tracking-[-0.02em] text-foreground md:text-[46px]">
                    See how agentii.Solutions works for your team.
                  </h2>
                  <p className="mt-5 text-[17px] leading-8 text-foreground/80">
                    Our document processing solution builds a data map for agents, greatly increasing what agentic systems can do with structured data after processing. That data map is foundational for accurate reasoning, retrieval, and numerical calculation.
                  </p>
                </div>

                <div className="space-y-5 border-t border-border pt-8">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <CheckSquare2 className="mt-1 h-4 w-4 shrink-0 text-lilac-dark" />
                      <p className="text-base leading-7 text-foreground/85">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-xl border border-border bg-navy text-slate-200 shadow-[0_18px_60px_-30px_hsl(var(--color-navy)/0.55)]">
                  <div className="border-b border-slate-700/80 px-7 py-6">
                    <p className="font-brand text-[34px] leading-[1.02] tracking-[-0.03em] text-white md:text-[46px]">
                      Quickly deliver structured data that improves agent performance.
                    </p>
                  </div>

                  <div className="grid gap-0">
                    {outcomes.map((outcome, index) => (
                      <div
                        key={outcome.label}
                        className={`grid gap-6 px-7 py-7 md:grid-cols-[minmax(0,1fr)_180px] md:items-end ${
                          index < outcomes.length - 1 ? "border-b border-slate-700/80" : ""
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-lilac" aria-hidden="true" />
                          <p className="text-[22px] leading-8 text-slate-200">{outcome.label}</p>
                        </div>
                        <p className="font-brand text-[64px] leading-none tracking-[-0.05em] text-white md:text-right">
                          {outcome.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-6 shadow-[0_16px_40px_-28px_hsl(var(--foreground)/0.18)] lg:sticky lg:top-28">
                <div className="mb-6">
                  <h2 className="font-brand text-[30px] leading-tight tracking-[-0.02em] text-foreground">
                    Start your AI journey.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Share a few details and we will tailor the walkthrough to your data workflows and target outcomes.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-foreground">First name *</FormLabel>
                            <FormControl>
                              <Input {...field} autoComplete="given-name" className="h-11 rounded-lg" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-foreground">Last name *</FormLabel>
                            <FormControl>
                              <Input {...field} autoComplete="family-name" className="h-11 rounded-lg" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-foreground">Job title *</FormLabel>
                          <FormControl>
                            <Input {...field} autoComplete="organization-title" className="h-11 rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-foreground">Company *</FormLabel>
                          <FormControl>
                            <Input {...field} autoComplete="organization" className="h-11 rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-foreground">Work email *</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" autoComplete="email" inputMode="email" className="h-11 rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-foreground">Country *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-11 rounded-lg">
                                <SelectValue placeholder="Select your country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem key={country} value={country}>
                                  {country}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-foreground">Tell us about your use case</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="min-h-[128px] rounded-lg"
                              placeholder="What workflows, datasets, or agents are you looking to improve?"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full rounded-lg bg-lilac-dark text-primary-foreground hover:bg-lilac">
                      Request a Demo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestDemo;
