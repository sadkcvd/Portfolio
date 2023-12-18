import Image from 'next/image'
import React from 'react'
import CypressBanner from "./../../../public/EducationBanners/cypressbanner.png";
import ChooseBrowser from "./../../../public/Cypress/choose-browser.png";
import CypressArchitecture from "./../../../public/Cypress/cypress-architecture.jpg";
import SeleniumArchitecture from "./../../../public/Cypress/selenium-architecture.jpg";

const Cypress = () => {
    return (
        <div>
            <div className='flex flex-col items-center text-center gap-2'>
                <Image
                    alt='banner'
                    src={CypressBanner}
                    width={500}
                    height={500}
                />
                <h1 className='font-bold text-3xl pb-4 text-center pt-8'>Cypress NEDİR ?</h1>

                <p className='font-medium max-w-7xl'>
                    Cypress, modern web uygulamaları için tasarlanmış açık kaynak bir front-end test aracıdır.
                    Testlerin javascript ile yazıldığı, açık kaynak bir test otomasyon aracıdır.
                </p>
            </div>

            <div className='flex flex-col items-center p-8'>
                <Image
                    alt='choose-browser'
                    src={ChooseBrowser}
                    width={800}
                    height={800}
                />
                <div className='text-lg font-medium max-w-7xl'>
                    <p className='p-4'>Cypress şuanda bu tarayıcıları desteklemektedir;</p>
                    <li>Chrome</li>
                    <li>Electron</li>
                    <li>Edge & Firefox</li>
                    <p className='p-4'>
                        İşletim sisteminizde ki mevcut tarayıcıları otomatik olarak algılar. Cypress'te testleri çalıştırdığınızda sizin için bir tarayıcı başlatır.
                        Bu şunları sağlar:
                    </p>
                    <li>Temiz, bozulmamış bir test ortamı oluşturmak.</li>
                    <li>Otomasyon için ayrıcalıklı tarayıcı API'lerine erişmek.</li>
                </div>
            </div>

            <div className='flex flex-col items-center gap-5 p-8'>
                <h1 className='text-xl font-bold text-center'>Selenium VS Cypress Architecture</h1>
                <div className='flex items-center justify-center gap-5 p-5 flex-col xl:flex-row'>
                    <Image
                        alt='selenium-architecture'
                        src={SeleniumArchitecture}
                        width={800}
                        height={800}
                    />
                    <Image
                        alt='cypress-architecture'
                        src={CypressArchitecture}
                        width={500}
                        height={500}
                    />
                </div>

                <div className='w-full flex flex-col p-8 gap-4 border-2 rounded-lg bg-violet-100 items-center'>
                    <h1 className='font-semibold text-lg text-center'>NEDEN CYPRESS ?​</h1>
                    <div className='flex flex-col gap-5 font-medium text-center w-1/2 items-start'>
                        <li >Snapshot</li>
                        <li >Server response mocklama imkanı</li>
                        <li >Wait veya sleep kullanımına gerek duymuyor. </li>
                        <li >Auto screenshot, Video recording</li>
                        <li >Basit kurulum. Herhangi bir driver veya bağımlılık yok.</li>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Cypress