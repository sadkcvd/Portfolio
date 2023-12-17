'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SwrBanner from "./../../../public/EducationBanners/swrbanner.png";
import CodeBlock from '@/app/_Components/CodeBlock/CodeBlock';

const useSWR = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const code = `
    import useSWR from 'swr'

    function Profile() {
      const { data, error, isLoading } = useSWR('/api/user', fetcher)

      if (error) return <div>failed to load</div>
      if (isLoading) return <div>loading...</div>
      return <div>hello {data.name}!</div>
    }`;

    return (
        <div className='flex flex-col items-center justify-center '>
            <Image
                alt='banner'
                src={SwrBanner}
                width={500}
                height={500}
            />
            <h1 className='font-bold text-3xl pb-4'>useSWR NEDİR ?</h1>

            <p>
                "SWR" adı, HTTP RFC 5861 tarafından popüler hale getirilen bir HTTP önbellek geçersiz kılma stratejisi olan "stale-while-revalidate"den türetilmiştir.
                SWR, önce önbellekten veriyi döndürme (eskimiş), ardından getirme isteğini gönderme (yeniden doğrulama) ve son olarak güncel veri ile gelme stratejisidir.
            </p>

            <h1 className='font-bold text-2xl pt-8'>Overview</h1>

            <CodeBlock isCopied={isCopied} setIsCopied={setIsCopied} code={code} />

        </div >
    )
}

export default useSWR