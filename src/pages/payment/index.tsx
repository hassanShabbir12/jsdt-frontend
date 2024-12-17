import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
// {{ edit_1 }}
import { Label } from '@radix-ui/react-label';
import axios, { AxiosResponse } from 'axios';
import { MoveLeft } from 'lucide-react';

import { apiClient } from '@/api/clients/apiClient';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ApiResponse } from '@/interface/generic';
import { assetUrl } from '@/lib/asset-url';
import { SubscriptionPlan } from '@/utils/enums';

interface PaymentDetails {
  facilitatorAccessToken: string | undefined;
  orderID: string | undefined;
  paymentSource: string;
  subscriptionID: string | null | undefined;
}

interface ICreateSubscriptionResponse {
  message: string;
  subscriptionId: string;
}

export const Payment: FC = () => {
  const navigate = useNavigate();
  const { isPayment, signupData } = useAuth();

  const handleSubscription = async (signup: PaymentDetails): Promise<void> => {
    try {
      const obj = {
        orderId: signup.subscriptionID as string,
      };
      const response = (await apiClient.paypal.payPalControllerCreateSubscription(
        obj,
      )) as unknown as AxiosResponse<ApiResponse<ICreateSubscriptionResponse>>;
      const { data } = response;

      if (data.data.subscriptionId && signupData) {
        const userData = {
          ...signupData,
          isSubscribed: 'active',
          subscriptionId: data.data.subscriptionId,
        };

        await apiClient.auth.usersControllerCreate(userData);
        toast({
          title: 'Success',
          description: 'Signup successful',
        });
        navigate('/login');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
        });
      }
    }
  };

  useEffect(() => {
    if (!isPayment) {
      toast({
        title: 'Error',
        description: 'No subscription plan selected. Please select a plan.',
      });
      navigate('/pricing-plan');
    }
  }, [isPayment, navigate]);

  return (
    <section className='sm:pb-20 sm:pt-16 py-10'>
      <div className='mx-auto max-w-6xl px-4'>
        <div className='-mx-7 sm:flex justify-between'>
          <div className='sm:w-1/2 w-full px-7'>
            <div className='pl-10'>
              <div className='relative mb-4 inline-flex cursor-pointer items-center gap-4'>
                <div className='absolute -left-10'>
                  <span onClick={() => navigate(-1)}><MoveLeft className='cursor-pointer transition-all duration-300 hover:text-primary hover:-translate-x-1' /></span>
                </div>
                <p className='text-base text-zinc-800'>Back</p>
              </div>
              <h3 className='mb-2 text-base text-neutral-400'>Subscribe to JSDT Subscription</h3>
              <div className='sm:mb-4 flex w-56 items-center gap-2 text-sm sm:text-base text-neutral-400'>
                <h3 className='text-3xl sm:text-5xl font-bold text-zinc-800'>
                  ${isPayment === SubscriptionPlan.PlanA ? '39.99' : '349.99'}
                </h3>
                <p className='m-0 -mb-1'>
                  {isPayment === SubscriptionPlan.PlanA ? 'per month' : 'per year'}
                </p>
              </div>
              <div className='border-b border-solid border-neutral-400 py-4 '>
                <div className='mb-3 flex items-center justify-between'>
                  <h3 className='m-0 text-xl'>JSDT Subscription</h3>
                  <p className='m-0'>
                    ${isPayment === SubscriptionPlan.PlanA ? '39.99' : '349.99'}
                  </p>
                </div>
                <div className=''>
                  <h3 className='m-0 text-base text-neutral-400'>JSDT Subscription</h3>
                </div>
              </div>
              <div className='border-b border-solid border-neutral-400 py-4 '>
                <div className='mb-3 flex items-center justify-between'>
                  <h3 className='m-0 text-xl'>Subtotal</h3>
                  <p className='m-0'>
                    ${isPayment === SubscriptionPlan.PlanA ? '39.99' : '349.99'}
                  </p>
                </div>
                <div className='flex items-center justify-between'>
                  <h3 className='m-0 text-base text-neutral-400'>Tax</h3>
                  <p className='m-0 text-neutral-400'>$0.00</p>
                </div>
              </div>
              <div className='flex items-center justify-between py-4'>
                <h3 className='m-0 text-base text-zinc-800'>Total due today</h3>
                <p className='m-0'>${isPayment === SubscriptionPlan.PlanA ? '39.99' : '349.99'}</p>
              </div>
            </div>
          </div>
          <div className='sm:w-1/2 w-full px-7'>
            <div className='pl-10 sm:pl-0'>
              <h3 className='mb-4'>Contact Information</h3>
              <div className='mb-4 w-full'>
                <Label
                  htmlFor='name'
                  className='mb-1.5 block font-normal leading-none text-black lg:text-base'
                >
                  Email
                </Label>
                <Input
                  disabled={true}
                  value={signupData?.email}
                  id='iem'
                  type='email'
                  className='h-12 rounded-lg border border-solid border-neutral-200 bg-gray-50 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                />
              </div>
              <div className='w-full'>
                <Dialog>
                  <DialogTrigger asChild>
                    <PayPalScriptProvider
                      options={{
                        clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
                        vault: true,
                        intent: 'subscription',
                        currency: 'USD',
                      }}
                    >
                      <div className='w-full'>
                        <PayPalButtons
                          createSubscription={(_, actions) =>
                            actions.subscription
                              .create({
                                plan_id:
                                  isPayment === SubscriptionPlan.PlanA
                                    ? import.meta.env.VITE_PAYPAL_MONTHLY_PLAN_ID
                                    : import.meta.env.VITE_PAYPAL_YEARLY_PLAN_ID,
                              })
                              .catch((error) => {
                                throw error;
                              })
                          }
                          onApprove={async (data, _) => {
                            const paymentDetails: PaymentDetails = {
                              facilitatorAccessToken: data.facilitatorAccessToken,
                              orderID: data.orderID,
                              paymentSource: 'PayPal',
                              subscriptionID: data.subscriptionID,
                            };

                            await handleSubscription(paymentDetails);
                          }}
                        />
                      </div>
                    </PayPalScriptProvider>
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
      </div>
    </section>
  );
};
