import Layout from "../Layout"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

function IntroductionPage() {
  return (
    <Layout>
      <div className="flex items-center ustify-between mb-[40px]">
        <div>
          <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            animate={{ opacity: 1, translateY: 0, transition: { delay: 0.4 } }}
            className="text-2xl font-bold text-[42px] mb-[20px]"
          >

            Introduction to the platform 📈
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            animate={{ opacity: 1, translateY: 0, transition: { delay: 0.6 } }}
            className="mb-[20px]"
          >
            Just a quick introduction to the platform and how to use it.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            animate={{ opacity: 1, translateY: 0, transition: { delay: 0.7 } }}
            className="mb-[20px]"
          >
            This platform is designed to provide actionable insights and help you make data-driven decisions. Explore the features, understand the data sources, and leverage the tools to maximize your impact.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 80 }}
            animate={{ opacity: 1, translateY: 0, transition: { delay: 0.8 } }}
            className="mb-[20px]"
          >
            Whether you're a researcher, a program specialist, or part of a communication team, this platform is tailored to meet your needs. Dive in and discover the possibilities.
          </motion.div>
        </div>

      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0, transition: { delay: 0.6 } }}
        className="text-2xl font-bold text-[42px]"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-2xl flex gap-[10px]">
              Who is this Dashboard for?
            </AccordionTrigger>
            <AccordionContent className="font-light">
              This dashboard is primarily designed for UNICEF staff, partners, and stakeholders working in the South Asia Region. It supports evidence-based decision-making by providing real-time insights into public concerns, emerging narratives, and trends across digital platforms. Communication teams, program specialists, and researchers may find it particularly useful for planning and response.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold text-2xl">
              Data Sources and Frequency of Updates
            </AccordionTrigger>
            <AccordionContent className="font-light">
              The insights presented in this dashboard are generated from multiple open-source platforms, including social media, news websites, and other online publications. The data is updated weekly to reflect the most recent developments and trends. Special thematic reports may also be added based on emerging needs or specific requests.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold text-2xl">
              Feedback and Support
            </AccordionTrigger>
            <AccordionContent className="font-light">
              We welcome your feedback to improve this dashboard and tailor it to your needs. If you encounter any issues or have suggestions, please reach out to our team. You can also request custom visualizations or deeper analysis for specific topics of interest.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </motion.div>

    </Layout>
  )
}

export default IntroductionPage