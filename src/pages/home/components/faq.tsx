import { FC } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq: FC = () => (
  <section className='relative'>
    <div className='container'>
      <div className='mx-auto px-4 md:w-1/2 md:px-8 lg:px-16 xl:px-0'>
        <h2 className='relative mb-4 text-center text-3xl font-bold !leading-tight text-zinc-800 md:px-5 md:text-4xl lg:mb-0 lg:px-6 lg:text-5xl xl:text-6xl'>
          <span className='relative mr-1 inline-block before:absolute before:left-0 before:right-0 before:top-1/2 before:-z-10 before:h-4 before:bg-yellow md:mr-0 md:before:h-5 lg:before:h-6'>
            Any Questions?
          </span>
          Look here.
        </h2>
      </div>
      <div className='px-5 pb-10'>
        <Accordion type='single' defaultValue='item-1' collapsible>
          <AccordionItem value='item-1' className='data-[state=open]:shadow-lg'>
            <AccordionTrigger className='px-3 py-5 text-left text-base font-semibold text-zinc-800 hover:text-zinc-600 hover:no-underline sm:text-2xl md:px-5 md:py-5 md:text-3xl lg:px-10 lg:py-12 lg:text-4xl'>
              How JSDT works?
            </AccordionTrigger>
            <AccordionContent>
              <div className='lg:text-3.5xl px-3 pb-1 leading-tight text-zinc-800 md:px-5 md:pb-2 md:text-xl lg:pb-8 lg:pl-10 lg:pr-28'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra leo mi, ut
                suscipit sem molestie ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='data-[state=open]:shadow-lg'>
            <AccordionTrigger className='px-3 py-5 text-left text-base font-semibold text-zinc-800 hover:text-zinc-600 hover:no-underline sm:text-2xl md:px-5 md:py-5 md:text-3xl lg:px-10 lg:py-12 lg:text-4xl'>
              How to signup?
            </AccordionTrigger>
            <AccordionContent>
              <div className='lg:text-3.5xl px-3 pb-1 leading-tight text-zinc-800 md:px-5 md:pb-2 md:text-xl lg:pb-8 lg:pl-10 lg:pr-28'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra leo mi, ut
                suscipit sem molestie ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3' className='data-[state=open]:shadow-lg'>
            <AccordionTrigger className='px-3 py-5 text-left text-base font-semibold text-zinc-800 hover:text-zinc-600 hover:no-underline sm:text-2xl md:px-5 md:py-5 md:text-3xl lg:px-10 lg:py-12 lg:text-4xl'>
              What are the pricing plans?
            </AccordionTrigger>
            <AccordionContent>
              <div className='lg:text-3.5xl px-3 pb-1 leading-tight text-zinc-800 md:px-5 md:pb-2 md:text-xl lg:pb-8 lg:pl-10 lg:pr-28'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra leo mi, ut
                suscipit sem molestie ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4' className='data-[state=open]:shadow-lg'>
            <AccordionTrigger className='px-3 py-5 text-left text-base font-semibold text-zinc-800 hover:text-zinc-600 hover:no-underline sm:text-2xl md:px-5 md:py-5 md:text-3xl lg:px-10 lg:py-12 lg:text-4xl'>
              What are the privacy policy of JSDT?
            </AccordionTrigger>
            <AccordionContent>
              <div className='lg:text-3.5xl px-3 pb-1 leading-tight text-zinc-800 md:px-5 md:pb-2 md:text-xl lg:pb-8 lg:pl-10 lg:pr-28'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra leo mi, ut
                suscipit sem molestie ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

export default Faq;
