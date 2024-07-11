
import Heading from '../components/Heading'
// import Button from '../components/Button'
import Accordians from "../components/Accordians"
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from 'react';
import { cn } from '@/lib/utils';
interface LogisticsFAQ {
    question: string;
    answer: string;
    category: string;
    contact?: string; // Optional field for contact information
    additionalInfo?: string; // Optional field for any additional information
}

// Create an array of objects conforming to the LogisticsFAQ interface
const faqs: LogisticsFAQ[] = [
    {
        question: "What shipping options are available?",
        answer: "We offer standard ground shipping, expedited shipping, next-day delivery, and international shipping.",
        category: "Shipping and Delivery",
        contact: "support@example.com",
        additionalInfo: "You can choose the option that best fits your needs during the checkout process."
    },
    {
        question: "How do I track my shipment?",
        answer: "Enter the tracking number provided in your shipping confirmation email on our tracking page.",
        category: "Shipping and Delivery",
        contact: "trackingsupport@example.com"
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, PayPal, and bank transfers. For corporate clients, we offer invoicing options.",
        category: "Pricing and Payment"
    },
    {
        question: "Do you offer warehousing and storage solutions?",
        answer: "Yes, our facilities include options for climate-controlled storage and are equipped to handle various types of goods.",
        category: "Services Offered",
        additionalInfo: "Contact our sales team for more details about our warehousing solutions."
    },
    {
        question: "How can I contact customer service?",
        answer: "You can contact our customer service team via phone, email, or live chat on our website.",
        category: "Customer Support",
        contact: "customerservice@example.com",
        additionalInfo: "Our contact details are available on the Contact Us page."
    }
];
const Strains = () => {
    const [activeItem, setActiveItem] = useState<string | null>(faqs[0].question);
    const handleItemClick = (question: string) => {
        setActiveItem(activeItem === question ? null : question);
    };
    return (
        <div>
            <div
                className="bg-[#ebebeb] py-14  "
            >
                <Heading
                    text="Strains"
                    className="!font-bold !text-3xl lg:!text-[2.755rem]"
                />
            </div>

            <section className="bg-white py-10 ">
                <div className="lg:flex flex-col  lg:flex-row items-start space-x-4 max-w-6xl mx-auto">
                    <div className="flex-none sticky top-14  lg:w-[min(18rem,100%)] px-2">
                        <Heading
                            text="Filter"
                            className="!text-lg !font-semibold !text-start !pl-1 !border-b !pb-2"
                        />

<Accordion type="single" collapsible defaultValue={faqs[0].question}>
                    {faqs.map((faq, idx) => (
                        <AccordionItem
                            value={faq.question}
                            key={faq.question}

                        >
                            <AccordionTrigger
                                defaultChecked
                                onClick={() => handleItemClick(faq.question)}
                                className={cn("", activeItem === faq.question && "text-primary-color text-start")}
                            >
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>{faq.answer}</p>
                                <br />
                                {faq.contact && (
                                    <p>
                                        For more detail contact
                                        <Button variant="link" className="ml-1 px-0">
                                            {faq.contact}
                                        </Button>
                                    </p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}

                </Accordion>
                    </div>
                    <div className="lg:flex-1">
                        <div
                            className="flex items-stretch space-x-2 px-2"
                        >
                            <input
                                placeholder="Search for strains"
                                className="flex-1 border-[#ebebeb] border rounded-sm min-h-[3rem] pl-2 outline-none hove:outline-none"
                            />
                            <Button>

                                some button
                            </Button>

                        </div>
                        <div
                            className=' grid grid-cols-1 sm:grid-cols-2 mt-10 md:lg:grid-cols-3 gap-4 lg:gap-10 mx-auto container lg:px-22'
                        >
                            {
                                Array.from({ length: 10 }, (arr, index) => <motion.div

                                    initial={{ y: 40, opacity: 0.5 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className=' mx-5 lg:mx-0'>
                                    <img
                                        className='w-full h-[15rem] rounded-md'
                                        src='https://weed.com/wp-content/uploads/2023/06/%E2%80%9888-G13-Hashplant-strain-360x360.jpg' />
                                    <Heading

                                        className="!text-xl lg:!text-start"
                                        text="Our Most Popular Categories"
                                    />
                                    <p
                                        className='line-clamp-4'
                                    >

                                        Did you know there is a new cannabinoid that is causing quite a buzz within the hemp community? If your guess was THC-O-acetate (THC-O), you are absolutely correct....
                                    </p>
                                    <p className='text-slate-700'>March 8, 2023</p>
                                </motion.div>)

                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Strains