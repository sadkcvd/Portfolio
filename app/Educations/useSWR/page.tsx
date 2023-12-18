'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SwrBanner from "./../../../public/EducationBanners/swrbanner.png";
import SwrPaginationGif from "./../../../public/SWR/swr-pagination-example.gif";
import CodeBlock from '@/app/_Components/CodeBlock/CodeBlock';
import useSWR from 'swr'

type DataType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: object,
    phone: string,
    website: string,
    company: object
}

type SwrDataType = {
    data: DataType,
    error: object,
    isLoading: boolean,
    isValidating: boolean
}

const useSWREducation = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false),
        [fetchData, setFetchData] = useState<DataType>(),
        [swrData, setSwrData] = useState<SwrDataType>(),
        [isFetchingSwr, setIsFetchingSwr] = useState<boolean>(false),
        [fetchIsLoading, setFetchIsLoading] = useState<boolean>(false),

        fetcher = (url: string) => fetch(url).then((res) => res.json()),
        { data, error, isLoading, isValidating, mutate } = useSWR(
            isFetchingSwr ? "https://jsonplaceholder.typicode.com/users/1" : null,
            fetcher
        ),

        code = `
import useSWR from 'swr'

function useSwrEducation() {
const { data, error, isLoading, isValidating, mutate } = useSWR('/api/user', fetcher)

if (error) return <div>failed to load</div>
if (isLoading) return <div>loading...</div>
if (isValidating) return <div>refresh...</div>

return <div>hello {data.name}!</div>
    }`,

        trySwr = () => {
            !isFetchingSwr
                ? setIsFetchingSwr(true)
                : mutate();
        },

        tryFetch = async () => {
            try {
                setFetchIsLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const result = await response.json();
                setFetchIsLoading(false);
                setFetchData(result)
            } catch (error) {
                setFetchIsLoading(false);
                console.error('Error fetching data:', error);
            }
        };


    useEffect(() => {
        setSwrData({ data, error, isLoading, isValidating });
    }, [data, error, isLoading])

    return (
        <div>

            <div className='flex flex-col items-center text-center gap-2'>
                <Image
                    alt='banner'
                    src={SwrBanner}
                    width={500}
                    height={500}
                />
                <h1 className='font-bold text-3xl pb-4 text-center'>useSWR NEDİR ?</h1>

                <p className='font-medium max-w-7xl'>
                    "SWR" adı, HTTP RFC 5861 tarafından popüler hale getirilen bir HTTP önbellek geçersiz kılma stratejisi olan "stale-while-revalidate"den türetilmiştir.
                    SWR, önce önbellekten veriyi döndürme (eskimiş), ardından getirme isteğini gönderme (yeniden doğrulama) ve son olarak güncel veri ile gelme stratejisidir.
                </p>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <h1 className='font-bold text-2xl pt-8 border-b-2 border-black'>Genel Bakış</h1>

                <CodeBlock isCopied={isCopied} setIsCopied={setIsCopied} code={code} />

                <p className='text-center font-semibold max-w-7xl'>
                    SWR, fetch'den farklı olarak veriyi bir kez çektikten sonra artık "Loading" (Yeniden Yükleme) değil "Refresh" (Yenileme) yapıyor.
                    Ayrıca uygulamayı manuel olarak yenilememize veya yeniden yüklememize gerek kalmadan verileri otomatik olarak yeniden doğrulayıp güncelleyebiliyor.
                </p>
            </div>



            <div className='flex flex-col justify-around p-8  gap-4 md:flex-row'>

                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='font-bold text-xl pb-4 text-center'>FETCH</h1>
                    <div className='flex flex-col p-8 items-center justify-center gap-2 border-2 rounded-lg h-48 w-64'>
                        {fetchIsLoading && <p>Loading...</p>}
                        {
                            fetchData &&
                            <div >
                                <h2>{`${fetchData.id} - ${fetchData.name}`}</h2>
                                <p>Username: {fetchData.username}</p>
                                <p>Email: {fetchData.email}</p>
                            </div>
                        }
                    </div>
                    <button className='font-semibold p-4 border-2 border-violet-600 rounded-lg hover:bg-violet-300 hover:text-white duration-300' onClick={tryFetch}>Try Fetch</button>
                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='font-bold text-xl pb-4 text-center'>SWR</h1>
                    <div className='flex flex-col p-8 items-center justify-center gap-2 border-2 rounded-lg h-48 w-64'>
                        {isLoading && <p>Loading...</p>}
                        {isValidating && <p>Refresh...</p>}
                        {error && <p>Error: {error.message}</p>}
                        {
                            swrData?.data &&
                            <div >
                                <h2>{`${swrData.data.id} - ${swrData.data.name}`}</h2>
                                <p>Username: {swrData.data.username}</p>
                                <p>Email: {swrData.data.email}</p>
                            </div>
                        }
                    </div>
                    <button className='font-semibold p-4 border-2 border-violet-600 rounded-lg hover:bg-violet-300  hover:text-white duration-300' onClick={trySwr}>Try SWR</button>
                </div>
            </div>


            <div className='flex flex-col items-center gap-2 p-8'>
                <h1 className='font-bold text-md'>Rick and Morty API useSWR kullanarak yapılmış sayfalama örneği</h1>
                <Image
                    alt='SwrPaginationGif'
                    src={SwrPaginationGif}
                    width={800}
                    height={600}
                />
            </div>


        </div >
    )
}

export default useSWREducation