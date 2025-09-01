import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaChartLine, FaSearchDollar, FaRocket } from 'react-icons/fa';

const LeadGeneration = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const strategies = [
    {
      icon: <FaLightbulb className="text-4xl text-blue-600 mb-4" />,
      title: "Content Marketing",
      description: "Create valuable content that attracts and engages your target audience, establishing your expertise and building trust."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
      title: "Social Media Marketing",
      description: "Leverage social platforms to connect with potential customers, share content, and drive traffic to your lead generation assets."
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600 mb-4" />,
      title: "Search Engine Optimization",
      description: "Optimize your online presence to rank higher in search results and attract organic traffic interested in your offerings."
    },
    {
      icon: <FaSearchDollar className="text-4xl text-blue-600 mb-4" />,
      title: "Paid Advertising",
      description: "Use targeted ads to reach specific audiences and drive qualified traffic to your landing pages and lead capture forms."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Identify Your Target Audience",
      description: "Define your ideal customer profile and understand their needs, pain points, and preferences."
    },
    {
      number: "02",
      title: "Create Compelling Offers",
      description: "Develop valuable lead magnets and offers that address your audience's challenges and provide solutions."
    },
    {
      number: "03",
      title: "Optimize Landing Pages",
      description: "Design conversion-focused landing pages with clear value propositions and strong calls to action."
    },
    {
      number: "04",
      title: "Implement Multi-Channel Promotion",
      description: "Distribute your offers across various channels to maximize visibility and reach."
    },
    {
      number: "05",
      title: "Nurture Leads",
      description: "Develop automated email sequences and follow-up processes to build relationships with leads."
    },
    {
      number: "06",
      title: "Analyze and Optimize",
      description: "Track performance metrics and continuously refine your lead generation strategies for better results."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Learn Lead <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Generation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Master the art and science of generating high-quality leads for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6">Why Lead Generation Matters</h2>
                <p className="text-gray-600 mb-6">
                  Effective lead generation is the foundation of successful business growth. It's the process of attracting and converting strangers and prospects into someone who has indicated interest in your company's product or service.
                </p>
                <p className="text-gray-600 mb-6">
                  In today's competitive market, businesses need a robust lead generation strategy to:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <FaRocket className="text-blue-600 mt-1 mr-3" />
                    <span>Drive sustainable business growth</span>
                  </li>
                  <li className="flex items-start">
                    <FaRocket className="text-blue-600 mt-1 mr-3" />
                    <span>Increase sales and revenue</span>
                  </li>
                  <li className="flex items-start">
                    <FaRocket className="text-blue-600 mt-1 mr-3" />
                    <span>Build a pipeline of qualified prospects</span>
                  </li>
                  <li className="flex items-start">
                    <FaRocket className="text-blue-600 mt-1 mr-3" />
                    <span>Reduce customer acquisition costs</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:w-1/2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Lead Generation Concept" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Effective Lead Generation Strategies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover proven approaches to attract and convert potential customers into qualified leads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                {strategy.icon}
                <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Lead Generation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow this step-by-step approach to build an effective lead generation system for your business.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600"
                >
                  <div className="text-4xl font-bold text-blue-600 opacity-30 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Lead Generation Tools & Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leverage these tools and resources to enhance your lead generation efforts.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-8">
                <motion.div 
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold mb-4">Free Resources</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaLightbulb className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Lead Generation Checklist</h4>
                        <p className="text-gray-600">A comprehensive checklist to ensure your lead generation strategy covers all essential elements.</p>
                        <a href="#" className="text-blue-600 font-medium hover:underline mt-1 inline-block">Download PDF</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaLightbulb className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Email Nurture Templates</h4>
                        <p className="text-gray-600">Ready-to-use email templates for nurturing leads through the sales funnel.</p>
                        <a href="#" className="text-blue-600 font-medium hover:underline mt-1 inline-block">Download Templates</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <FaLightbulb className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Lead Scoring Model</h4>
                        <p className="text-gray-600">A framework for prioritizing leads based on their engagement and fit for your business.</p>
                        <a href="#" className="text-blue-600 font-medium hover:underline mt-1 inline-block">Access Guide</a>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Recommended Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 text-center">
                      <h4 className="font-bold mb-2">CRM Systems</h4>
                      <p className="text-gray-600 text-sm">Manage and track leads throughout the sales process</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 text-center">
                      <h4 className="font-bold mb-2">Email Marketing</h4>
                      <p className="text-gray-600 text-sm">Automate lead nurturing and follow-up sequences</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 text-center">
                      <h4 className="font-bold mb-2">Landing Page Builders</h4>
                      <p className="text-gray-600 text-sm">Create high-converting pages for lead capture</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Transform Your Lead Generation?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8"
            >
              Partner with us to implement effective lead generation strategies tailored to your business.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a 
                href="/partner/become-partner" 
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Become a Partner
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;
