import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SyncForm from '../../Components/SyncForm';
import cardImg from '../../Img/cardHome.webp';

const NewUser: React.FC = () => {
  const syncSectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const focusSyncSection = () => {
    syncSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className='z-20 flex flex-col justify-center items-center mt-[10%] sm:mt-[15%] lg:m-[12%] lg:flex-row lg:justify-around bg-gray-1'>
        <div className='flex flex-col justify-center items-center max-w-screen lg:w-4/12 space-y-11 sm:space-y-16'>
          <h2 className='text-violet-1 text-center lg:mt-0 font-bold text-2xl max-w-[90%] lg:max-w-[100%]'>
            {t('title')}
          </h2>
          <h1 className='h1Title max-w-[90%] lg:max-w-[100%]'>
            {t('description.part1')}
          </h1>
          <p className='defaultPageText max-w-[90%] lg:max-w-[100%]'>
            {t('description.part2')}
          </p>
          <button
            type='button'
            onClick={focusSyncSection}
            className='defaultButton'>
            {t('syncCollection')}
          </button>
        </div>
        <div className='flex flex-col justify-center mb-[55%] sm:mb-[25%] md:mb-[25%] lg:mb-0'>
          <img
            className='flex w-[320px] h-[384px] lg:w-[358px] lg:h-[429px] xl:w-[417px] xl:h-[501px]'
            src={cardImg}
            alt='card'
          />
        </div>
      </section>
      <section
        ref={syncSectionRef}
        id='sync-section'
        className='bg-gray-2 flex flex-col justify-center'
        style={{ height: '85vh' }}>
        <SyncForm />
      </section>
    </>
  );
};

export default NewUser;
