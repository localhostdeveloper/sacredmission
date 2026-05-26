import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function DonateSuccessPage() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen pt-36 flex items-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-20 h-20 border border-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-8">
          <Heart size={32} className="text-[#C9A84C]" fill="#C9A84C" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Thank You for Your
          <br />
          <span className="text-[#C9A84C]">Generosity.</span>
        </h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Your donation has been received. You are now part of a movement that is changing lives,
          building legacies, and encoding hope across the world.
          <br /><br />
          A confirmation receipt has been sent to your email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="gold" withArrow>Back to Home</Button>
          <Button href="/impact" variant="outline-gold" withArrow>See Our Impact</Button>
        </div>
      </div>
    </section>
  );
}
