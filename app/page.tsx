import Image from "next/image";
import { GeistMono } from "geist/font/mono";
import clsx from "clsx";
import { Button, Chart } from "./components/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className=''>
      <section
        className={clsx(
          GeistMono.className,
          " h-full w-full relative justify-center items-center flex min-h-screen"
        )}>
        <div className='w-max max-w-lg'>
          <h1 className='font-bold text-2xl mt-4 mb-10'>
            Passionate Data scientist and Data analyst
          </h1>
          <p className='font-light'>
            Leveraging statistical tools and expertise in data visualization, I
            highlight proficiency in database management and analytical skills.
          </p>
          <Button>
            <Link href={"/#contact"}>GET IN TOUCH</Link>
          </Button>
        </div>
        <div className='absolute bottom-40 right-10'>
          <div>
            <Button variant='tertial'>
              <Link href={"https://github.com/valentinuwayo"}>
                <svg
                  width='97'
                  height='95'
                  viewBox='0 0 97 95'
                  fill='none'
                  className=' w-8 h-8 p-2'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M32.3018 75.7768C32.3018 76.1645 31.8558 76.4748 31.2935 76.4748C30.6537 76.5329 30.2077 76.2227 30.2077 75.7768C30.2077 75.389 30.6537 75.0787 31.216 75.0787C31.7977 75.0206 32.3018 75.3308 32.3018 75.7768ZM26.2717 74.9042C26.1359 75.292 26.5237 75.738 27.1054 75.8543C27.6095 76.0482 28.1912 75.8543 28.3076 75.4665C28.4239 75.0787 28.0555 74.6328 27.4738 74.4583C26.9697 74.3225 26.4074 74.5164 26.2717 74.9042ZM34.8418 74.5746C34.2795 74.7103 33.8917 75.0787 33.9499 75.5247C34.0081 75.9125 34.5122 76.1645 35.0939 76.0288C35.6562 75.8931 36.044 75.5247 35.9858 75.1369C35.9276 74.7685 35.4041 74.5164 34.8418 74.5746ZM47.6001 0.274039C20.7069 0.274039 0.134613 20.6912 0.134613 47.5844C0.134613 69.0874 13.6685 87.488 32.9998 93.9641C35.4817 94.4101 36.3542 92.8783 36.3542 91.618C36.3542 90.4158 36.296 83.7846 36.296 79.7128C36.296 79.7128 22.7234 82.6212 19.8731 73.9348C19.8731 73.9348 17.6627 68.2924 14.4828 66.8382C14.4828 66.8382 10.0426 63.794 14.7931 63.8522C14.7931 63.8522 19.6211 64.24 22.2774 68.8547C26.5237 76.3391 33.6397 74.1868 36.4124 72.9071C36.8583 69.8048 38.1186 67.6526 39.5147 66.3728C28.676 65.1707 17.7403 63.6001 17.7403 44.9474C17.7403 39.6153 19.2139 36.9396 22.3162 33.527C21.8121 32.2667 20.164 27.0703 22.8203 20.3616C26.8727 19.1012 36.1991 25.5967 36.1991 25.5967C40.077 24.5109 44.2457 23.9486 48.3757 23.9486C52.5057 23.9486 56.6744 24.5109 60.5523 25.5967C60.5523 25.5967 69.8787 19.0819 73.9311 20.3616C76.5874 27.0897 74.9393 32.2667 74.4352 33.527C77.5375 36.959 79.4377 39.6347 79.4377 44.9474C79.4377 63.6583 68.0173 65.1513 57.1785 66.3728C58.9624 67.9046 60.4747 70.813 60.4747 75.3696C60.4747 81.9038 60.4166 89.9893 60.4166 91.5792C60.4166 92.8395 61.3085 94.3713 63.771 93.9253C83.1605 87.488 96.3065 69.0874 96.3065 47.5844C96.3065 20.6912 74.4934 0.274039 47.6001 0.274039ZM18.9812 67.1484C18.7291 67.3423 18.7873 67.7883 19.1169 68.1567C19.4272 68.4669 19.8731 68.6026 20.1252 68.3506C20.3773 68.1567 20.3191 67.7107 19.9895 67.3423C19.6792 67.0321 19.2333 66.8964 18.9812 67.1484ZM16.8871 65.5779C16.7514 65.8299 16.9453 66.1402 17.3331 66.3341C17.6433 66.528 18.0311 66.4698 18.1668 66.1983C18.3026 65.9463 18.1087 65.636 17.7209 65.4422C17.3331 65.3258 17.0229 65.384 16.8871 65.5779ZM23.1693 72.4805C22.8591 72.7326 22.9754 73.3143 23.4214 73.6827C23.8674 74.1286 24.4297 74.1868 24.6817 73.8766C24.9338 73.6245 24.8174 73.0428 24.4297 72.6744C24.0031 72.2285 23.4214 72.1703 23.1693 72.4805ZM20.9589 69.6303C20.6487 69.8242 20.6487 70.3283 20.9589 70.7743C21.2692 71.2202 21.7927 71.4141 22.0447 71.2202C22.355 70.9682 22.355 70.464 22.0447 70.0181C21.7733 69.5721 21.2692 69.3782 20.9589 69.6303Z'
                    className='group-hover:fill-white fill-gray-950'
                  />
                </svg>
              </Link>
            </Button>
          </div>
          <div>
            <Button variant='tertial'>
              <Link href={"https://linkedin.com/in/uwayo-valentin"}>
                <svg
                  width='97'
                  height='97'
                  viewBox='0 0 97 97'
                  fill='none'
                  className=' w-8 h-8 p-2'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M21.6617 96.4438H1.72317V32.2362H21.6617V96.4438ZM11.6817 23.4777C5.306 23.4777 0.134613 18.1968 0.134613 11.8211C0.134613 8.75864 1.35118 5.82159 3.51667 3.6561C5.68217 1.4906 8.61921 0.274039 11.6817 0.274039C14.7442 0.274039 17.6812 1.4906 19.8467 3.6561C22.0122 5.82159 23.2288 8.75864 23.2288 11.8211C23.2288 18.1968 18.0552 23.4777 11.6817 23.4777ZM96.2851 96.4438H76.3895V65.1879C76.3895 57.7389 76.2392 48.1861 66.0231 48.1861C55.6567 48.1861 54.0682 56.2792 54.0682 64.6513V96.4438H34.1511V32.2362H53.2739V40.9947H53.553C56.2149 35.95 62.7172 30.6262 72.4181 30.6262C92.5971 30.6262 96.3065 43.9142 96.3065 61.1736V96.4438H96.2851Z'
                    className='group-hover:fill-white fill-gray-950'
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
        <div className='absolute bottom-40 left-10'>
          <svg
            width='16'
            height='90'
            viewBox='0 0 16 90'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className=''>
            <path
              d='M7.2929 89.7071C7.68342 90.0976 8.31659 90.0976 8.70711 89.7071L15.0711 83.3431C15.4616 82.9526 15.4616 82.3195 15.0711 81.9289C14.6805 81.5384 14.0474 81.5384 13.6569 81.9289L8 87.5858L2.34315 81.9289C1.95263 81.5384 1.31946 81.5384 0.928936 81.9289C0.538411 82.3195 0.538412 82.9526 0.928936 83.3431L7.2929 89.7071ZM7 4.37114e-08L7 89L9 89L9 -4.37114e-08L7 4.37114e-08Z'
              className='fill-gray-950'
            />
          </svg>
        </div>
      </section>
      <section
        className={
          " h-full w-full relative min-h-screen bg-gray-950 text-white flex justify-center items-center"
        }
        id='about'>
        <div className='w-full grid grid-cols-2 mx-10'>
          <div>
            <h2 className={"font-bold text-2xl mt-4 mb-10"}>About</h2>
            <p className='font-light'>
              As a data-driven problem solver, I am deeply passionate about
              extracting insights from intricate datasets. With over{" "}
              <strong>four</strong> years of extensive experience in data
              management, analysis, and visualization, I have honed a robust
              proficiency in data visualization, database management, and
              handling large datasets with Python. My expertise includes
              presenting complex data in an understandable manner, and I find
              satisfaction in collaborating with cross-functional teams to drive
              business decisions grounded in data-driven insights.
            </p>
          </div>
          <div className='flex justify-center'>
            <div className='bg-gray-100 px-2 py-4'>
              <Image
                src={"/profile.png"}
                width={350}
                height={350}
                alt="uwayo valentin's profile picture"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className='h-full w-full relative min-h-screen  flex justify-center items-center'
        id='skills'>
        <div className='w-full bg-white h-full mx-10 grid grid-cols-2'>
          <div className='flex justify-center items-center'>
            <div className='w-2/3'>
              <Chart />
            </div>
          </div>
          <div>
            <h2 className={"font-bold text-2xl mt-4 mb-10"}>Skills</h2>
            <div className='font-light'>
              <p>
                My set of skills that show my commitment to providing useful
                insights and helping with well-informed decision-making.
              </p>
              <ul className='text-sm list-square my-2'>
                <li>
                  Proficient in statistical analysis software, including R and
                  Python.
                </li>
                <li>
                  Skilled in using data visualization and reporting tools such
                  as Tableau, Excel, and PowerBI.
                </li>
                <li>
                  Experienced in designing and conducting experiments, surveys,
                  and data collection procedures in a retail environment.
                </li>
                <li>
                  Proficient in database management systems, including SQL,
                  Oracle, and MySQL.
                </li>
                <li>
                  Strong knowledge of retail industry trends, marketing
                  concepts, and customer behavior analysis.
                </li>
                <li>
                  Possesses excellent analytical and problem-solving skills.
                </li>
                <li>
                  Demonstrates strong communication and interpersonal skills.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
