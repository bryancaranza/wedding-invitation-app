import { faqs } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const FAQs = () => {
  return (
    <section className="py-20 px-6 bg-white/50 text-black text-center">
      <h2 className="text-3xl font-serif mb-6">FAQs</h2>

      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b last:border-none"
          >
            <AccordionHeader>
              <AccordionTrigger className="flex justify-between items-center w-full py-5 text-left text-lg md:text-xl font-serif text-pink-800 hover:text-pink-600 transition-colors duration-300">
                <span>{faq.question}</span>
                <ChevronDownIcon className="w-6 h-6 transition-transform duration-300 radix-state-open:rotate-180" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent
              className="overflow-hidden px-4 pb-5 text-gray-700 font-serif rounded-b-lg
             radix-state-open:animate-slide-down radix-state-closed:animate-slide-up"
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQs;
