import { FC, useRef, useState } from 'react';

import { Label } from '@radix-ui/react-label';

import { Input } from '@/components/ui/input';
import { assetUrl } from '@/lib/asset-url';

const BasicEducation: FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = (): void => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className='mx-auto max-w-[812px] px-4 pb-5 pt-10'>
      <div className='gap-x-4 sm:flex'>
        <div className='relative'>
          {!imagePreview && (
            <Label
              htmlFor='file-upload'
              className='mb-2.5 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full border border-solid border-zinc-800 text-center text-base text-zinc-800 hover:opacity-90'
            >
              Logo <br></br> Here
            </Label>
          )}
          {imagePreview && (
            <div className='h-28 w-28 rounded-full'>
              <img src={imagePreview} alt='Preview' className='block h-auto w-full rounded-full' />
            </div>
          )}
          <Input
            ref={fileInputRef}
            id='file-upload'
            type='file'
            className='hidden'
            onChange={handleFileChange}
          />
        </div>
        <div className='mb-1.5 w-full'>
          <div className='border-b-2 border-solid border-neutral-200'>
            <h1 className='pb-3 pl-3 text-base text-zinc-800'>Basic Education</h1>
          </div>
          <h2 className='mb-1 pl-3 pt-3 text-base font-semibold text-zinc-800'>Department:</h2>
          <div className='mb-8 pl-3 text-base text-zinc-800'>
            <p className='mb-1'>Basic Education</p>
            <p className='mb-1'>Republic of South Asia</p>
          </div>
        </div>
      </div>
      <div className='sm:pl-32'>
        <div className='mb-5 sm:mb-10'>
          <Input
            type='text'
            placeholder='National Senior Certificate'
            className='h-12 w-full bg-black text-base font-semibold !text-white placeholder:text-white'
          />
        </div>
        <div className='mb-5 sm:mb-10'>
          <Input
            type='text'
            placeholder='Grade:'
            className='h-12 w-full bg-blue-500 text-base font-semibold !text-white placeholder:text-white'
          />
        </div>
        <div className='mb-5 rounded-xl border border-dashed border-blue-400 bg-yellow-200 pb-4 pt-3 sm:mb-8'>
          <div className='items-center p-2 sm:flex'>
            <Label htmlFor='subject' className='text-sm font-semibold text-zinc-800 sm:text-base'>
              Subject name & paper no. :
            </Label>
            <Input
              type='text'
              id='subject'
              name='subject'
              className='h-4 w-full rounded-none border-0 border-b border-black bg-transparent p-0 text-xs shadow-none outline-none focus:!outline-none focus:!ring-0 sm:w-48'
            />
          </div>
          <div className='items-center p-2 sm:flex'>
            <Label htmlFor='subject' className='text-sm font-semibold text-zinc-800 sm:text-base'>
              Date:
            </Label>
            <Input
              type='number'
              className='h-4 w-full rounded-none border-0 border-b border-black bg-transparent p-0 text-xs shadow-none outline-none focus:!outline-none focus:!ring-0 sm:w-32 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            />
          </div>
        </div>
        <div className='mb-5 rounded-xl bg-blue-500 p-2 py-3 text-center text-sm text-white sm:mb-14 sm:px-9 sm:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at
          elementum. Cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc
          ac a magna at elementum. Cras.
        </div>
        <div className='mb-14 items-center justify-between sm:mb-28 sm:flex'>
          <div className='mb-5 w-full sm:mb-0 sm:flex sm:w-52'>
            <Label htmlFor='subject' className='text-base text-zinc-800'>
              Marks:
            </Label>
            <Input
              type='number'
              className='h-[18px] w-full rounded-none border-0 border-b border-black bg-transparent p-0 text-xs shadow-none outline-none focus:!outline-none focus:!ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            />
          </div>
          <div className='w-full sm:flex sm:w-52'>
            <Label htmlFor='subject' className='text-base text-zinc-800'>
              Total:
            </Label>
            <Input
              type='number'
              className='h-[18px] w-full rounded-none border-0 border-b border-black bg-transparent p-0 text-xs shadow-none outline-none focus:!outline-none focus:!ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            />
          </div>
        </div>
        <div className='mb-8 text-base text-zinc-800 sm:mb-14'>
          This question paper contains of ____ pages.
        </div>
        <div className='flex items-center justify-between'>
          <h3 className='text-base text-zinc-800'>Copyrights reserved</h3>
          <div className='flex items-center'>
            <h3 className='m-0 text-base text-zinc-800'>Please turnover</h3>
            <img
              src={assetUrl('assets/img/home/arrow-right-around.svg')}
              alt='round-arrow'
              className='ml-2 block h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicEducation;
