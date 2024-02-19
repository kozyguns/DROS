import * as React from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../components/ui/button';
import Image from 'next/image';
import { Meteors } from "../../components/ui/meteors";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel';



const JimathyPage = () => {
  const router = useRouter();

  const handleButtonClick = (path: string) => {
    router.push('/');
  };

  return (
    <div>
      <p>This is Slim Jim's profile page.</p>
      <div className="flex justify-center">
      {/* 
        Replace "example.jpg" with the name of your image file. 
        The `src` attribute should reference the path to your image file relative to the `public` directory.
      */}
      <Image src="/tgr logo.png" alt="TGR Logo" width={500} height={300} />
    </div>
    <h3 className="text-center" style={{color: "red", fontWeight: "bold", fontSize: "2em"}} >Gunsmith ON DUTY FULL TIME</h3>
    <div className="flex justify-center" style={{ padding: '10px' }}>
    <Card className="w-98 h-50 bg-base-100 shadow-xl flex flex-col justify-center">
      <CardHeader>
        <CardTitle >The Indoor Shooting Facility</CardTitle>
        <CardDescription>Hours Of Operation</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Tuesday – Saturday : 9 AM - 9 PM<br />
         Sunday | Monday 11 AM – 6 PM <br />
          <br />
          No Reservations Needed For Shooting Lanes <br />
          They Are Available First Come, First Served!<br /> 
          <br />
          CDCR Qualifications: Tues – Sat 8 AM – 9 AM <br /> 
          No Reservations</p>
      </CardContent>
      <CardFooter>
        <p>3479 Orange Grove Ave | 916.972.1484</p>
      </CardFooter>
    </Card>
    </div>
    <div className="flex flex-row justify-center" style={{ padding: '10px' }}>
            <Button onClick={() => handleButtonClick("/")} className="mr-1 flex-shrink">
              Home
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/Sammy")} className="ml-1 flex-shrink">
                Sammy's Profile
            </Button>
            <Button onClick={() => handleButtonClick("/DynamicDropdown")} className="ml-2 flex-shrink">
              Dynamic Dropdown Page
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/Jimathy")} className="ml-2 flex-shrink">
              Slim Jim's Page
            </Button>
            <Button onClick={() => handleButtonClick("/Payments/data-table")} className="ml-2 flex-shrink">
              Data Table Page
            </Button>
            <Button onClick={() => handleButtonClick("/Payments/page")} className="ml-2 flex-shrink">
              Testing Page
            </Button>
            </div>
            <div className="flex justify-center" style={{ padding: '10px' }}>
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            </div>
            <div className="flex justify-center" style={{ padding: '10px' }}>
              <Card className="w-98 h-50 bg-base-100 shadow-xl flex flex-col justify-center">
                <CardHeader>
                  <CardTitle >Gift Cards</CardTitle>
                  <CardDescription>WoW!</CardDescription>
                </CardHeader>
                <CardContent>

                  <Image src="/tgr giftcards.png" alt="TGR Logo" width={600} height={400} />

                </CardContent>
              </Card>
              </div>
              <div className="flex justify-center">
              <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
                {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
                <div className="relative shadow-xl  border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>
        
                  <h1 className="font-bold text-xl mb-4 relative z-50">
                    Meteors because they&apos;re cool
                  </h1>
        
                  <p className="font-normal text-base  mb-4 relative z-50">
                    I don&apos;t know what to write so I&apos;ll just paste something
                    cool here. One more sentence because lorem ipsum is just
                    unacceptable. Won&apos;t ChatGPT the shit out of this.
                  </p>
        
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 ">
                    Explore
                  </button>
        
                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
          <Button onClick={() => handleButtonClick("/")} className="mr-1 flex-shrink">
            Let's Go Home!
            </Button>
          </div>
        </div>
    
  );
};

export default JimathyPage;