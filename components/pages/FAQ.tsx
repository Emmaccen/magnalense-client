"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface FaqItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

export default function ProductFaq() {
    const [faqItems, setFaqItems] = useState<FaqItem[]>([
        {
            question: "What are the benefits of wearing blue light glasses?",
            answer:
                "Blue light glasses are designed to filter out harmful blue light emitted by digital screens, such as computers, smartphones, and tablets. Wearing them can help reduce eye strain, improve sleep quality by minimizing blue light exposure before bedtime, and may even prevent long-term damage to your eyes.",
            isOpen: true,
        },
        {
            question: "How do I choose the right frame size for my face?",
            answer:
                "To choose the right frame size, measure your face width, consider your face shape, and ensure the frames sit comfortably on your nose and ears. The width of the frames should align with your face width, and the style should complement your face shape. Many retailers offer size guides or virtual try-on tools to help you find the perfect fit.",
            isOpen: false,
        },
        {
            question: "Do your glasses come with a warranty?",
            answer:
                "Yes, all our glasses come with a 12-month warranty against manufacturing defects. This covers issues with frames and lenses under normal use conditions. The warranty does not cover damage from accidents, improper use, or normal wear and tear. Extended warranty options are also available at checkout.",
            isOpen: false,
        },
        {
            question: "Can I return or exchange my glasses if I'm not satisfied?",
            answer:
                "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return or exchange your glasses within 30 days of receipt. The glasses must be in their original condition with all accessories. Custom prescription lenses may have different return policies, so please check our detailed return policy for more information.",
            isOpen: false,
        },
    ]);

    const toggleFaq = (index: number) => {
        setFaqItems(
            faqItems.map((item, i) => {
                if (i === index) {
                    return { ...item, isOpen: !item.isOpen };
                }
                return item;
            })
        );
    };

    return (
        <div className="">
            {/* FAQ Content */}
            <div className="bg-gray-50 rounded-lg p-16">
                {faqItems.map((faq, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                        <div
                            className="bg-white p-6 rounded-lg shadow-sm mb-4 cursor-pointer"
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-gray-800">
                                    {faq.question}
                                </h3>

                                <div
                                    className={`flex items-center justify-center w-8 h-8 rounded-full ${faq.isOpen
                                            ? "bg-black border-none"
                                            : "bg-white border border-black"
                                        }`}
                                >
                                    {faq.isOpen ? (
                                        <ChevronDown className="w-5 h-5 text-white" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-black" />
                                    )}
                                </div>
                            </div>
                            {faq.isOpen && (
                                <div className="mt-4 text-gray-600">
                                    <p className="text-justify">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
