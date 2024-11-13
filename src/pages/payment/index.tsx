import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { MoveLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { assetUrl } from '@/lib/asset-url';

export const Payment: FC = () => {
  const navigate = useNavigate();

  const handlePayment = (): void => {
    setTimeout(() => {
      navigate('/signup');
    }, 1000);
  };

  return (
    <section className='pb-20 pt-16'>
      <div className='mx-auto max-w-[1256px] px-4'>
        <div className='-mx-7 flex justify-between'>
          <div className='w-1/2 px-7'>
            <div className='pl-10'>
              <div className='relative mb-4 inline-flex cursor-pointer items-center gap-4'>
                <div className='absolute -left-10'>
                  <MoveLeft />
                </div>
                <p className='text-base text-zinc-800'>Back</p>
              </div>
              <h3 className='mb-2 text-base text-neutral-400'>Subscribe to JSDT Subscription</h3>
              <div className='mb-4 flex w-56 items-center gap-2 text-base text-neutral-400'>
                <h3 className='text-5xl font-bold text-zinc-800'>R39,99</h3>
                <p className='m-0 -mb-1'>per month</p>
              </div>
              <div className='border-b border-solid border-neutral-400 py-4 '>
                <div className='mb-3 flex items-center justify-between'>
                  <h3 className='m-0 text-xl'>JSDT Subscription</h3>
                  <p className='m-0'>R39,99</p>
                </div>
                <div className=''>
                  <h3 className='m-0 text-base text-neutral-400'>JSDT Subscription</h3>
                </div>
              </div>
              <div className='border-b border-solid border-neutral-400 py-4 '>
                <div className='mb-3 flex items-center justify-between'>
                  <h3 className='m-0 text-xl'>Subtotal</h3>
                  <p className='m-0'>R39,99</p>
                </div>
                <div className='flex items-center justify-between'>
                  <h3 className='m-0 text-base text-neutral-400'>Tax</h3>
                  <p className='m-0 text-neutral-400'>$0.00</p>
                </div>
              </div>
              <div className='flex items-center justify-between py-4'>
                <h3 className='m-0 text-base text-zinc-800'>Total due today</h3>
                <p className='m-0'>R39,99</p>
              </div>
            </div>
          </div>
          <div className='w-1/2 px-7'>
            <h3 className='mb-4'>Contact Information</h3>
            <div className='mb-4 w-full'>
              <Label
                htmlFor='name'
                className='mb-1.5 block font-normal leading-none text-black lg:text-base'
              >
                Email
              </Label>
              <Input
                id='iem'
                type='email'
                className='h-12 rounded-lg border border-solid border-neutral-200 bg-gray-50 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
              />
            </div>
            <div className='w-full'>
              <Dialog>
                <DialogTrigger asChild>
                  <div className='w-full'>
                    <Button onClick={handlePayment} className='h-12 w-full text-base font-semibold'>
                      Pay Now
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent showCloseIcon={false} className='max-w-[620px]  rounded-3xl'>
                  <div className='py-9'>
                    <div className='mb-12 w-full'>
                      <img
                        className='mx-auto w-72'
                        src={assetUrl('/assets/img/home/successfull-mark.svg')}
                        alt='Image Description'
                      />
                    </div>
                    <div className='text-center'>
                      <strong className='mb-2 block text-center text-2xl font-bold text-primary'>
                        Thank you!
                      </strong>
                      <span className='text-base text-zinc-800'>Payment Successful</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
