import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Images from "../public/images/logo.png";

export default function product_details() {
  return (
    <>
      <div>
        <Head>
          <title>product-details with Tailwindcss</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          {/* font awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>
        <nav className="    mx-auto p-6 w-full h-24 bg-[#181813c9] shadow-[ 0px 4px 4px rgba(0, 0, 0, 0.25)]">
          <div className="flex  items-center justify-between sm:flex">
            <div className=" pl-1 flex items-center justify-start sm:pl-24  ">
              <a href="#">
                <i className="fas fa-bars text-white text-3xl"></i>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="logo"
                width="169px"
                height="47px"
                priority
              />
            </div>
            <div className=" flex space-x-2 pr-1 sm:pr-24 sm:space-x-10">
              <a href="#">
                <i className="fas fa-search text-white text-2xl sm:text-3xl "></i>
              </a>
              <a href="#">
                <i className="fas fa-shopping-cart text-white text-2xl sm:text-3xl"></i>
              </a>
            </div>
          </div>
        </nav>
        <main>
          {/* PRODUCT DETAİLS SECTİON */}

          <div className="product_detail ">
            {/* Products */}
            <div className="flex flex-col md:flex-row space-x-3 md:space-x-16  mt-14 px-4 md:px-20">
              <div>
                <Image
                  src="/images/furniture 2.png"
                  alt="furniture"
                  width="610px"
                  height="800px"
                  priority
                />
              </div>
              <div className=" flex md:flex-2  flex-col space-y-3 md:space-y-7  ">
                <h4 className=" font-merriWeather font-bold text-4xl ">
                  Sona Armless Chair
                </h4>
                <div className="flex flex-col md:space-y-1 space-y-1 ">
                  <span className="text-3xl">$400.00</span>
                  <span className="text-[14px]">
                    <b>Available :</b> In Stock
                  </span>
                </div>
                <p className="py-1  md:w-[482px] h-[195px] text-left font-Inter text-[18px] text-[#000000] ">
                  Versatile elegance for dining room, office or living room.
                  This seating solution offers great appeal. Bamboo chairs
                  combine premium quality materials with unique high-style
                  design, with the advanced product engineering and packaging
                  reinforcement, each product is designed, manufactured and
                  packaged with shipping in mind.
                </p>
                <div className="flex flex-row pt-10 md:pt-0 space-x-[7.5rem] ">
                  <div className="flex flex-col space-y-2">
                    <div>
                      <span className="font-Inter font-bold text-xl">
                        COLOR
                      </span>
                    </div>
                    <div>
                      <span>
                        <Image
                          src="/images/color.png"
                          alt="furniture"
                          width="93px"
                          height="26px"
                          priority
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div>
                      <span className="font-Inter font-bold text-xl">SIZE</span>
                    </div>
                    <div>
                      <span>
                        <Image
                          src="/images/Group 9.png"
                          alt="furniture"
                          width="93px"
                          height="26px"
                          priority
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-6">
                  <div className="flex flex-row py-4 space-x-3">
                    <span className="my-6 font-Inter font-bold text-2xl ">
                      QTY
                    </span>
                    <div className="rounded-full w-[96px] h-[48px]">
                      <button className="rounded-full w-[96px] h-[48px] border-[#949494] my-4 border-solid border-2">
                        - 01 +
                      </button>
                    </div>

                    <div>
                      {" "}
                      <button className="bg-[#FFB338] hover:bg-[#f19f1c]  text-black text-[18px] md:text-2xl font-bold my-3 md:my-0  px-6 py-3 md:px-5 md:py-1 md:w-[319px] md:h-[80px] rounded-full ">
                        {" "}
                        <a
                          href="#"
                          className="text-[#282825] font-merriWeather text-center "
                        >
                          <i class="fas fa-shopping-cart"></i>
                          SHOP NOW{" "}
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-3">
                  <p className="font-Inter font-bold text-xl ">SHARE</p>
                  <a href="#">
                    <ul>
                      <li>
                        {" "}
                        <Image
                          src="/images/Facebook.png"
                          alt="me"
                          width="30"
                          height="30"
                        />
                      </li>
                    </ul>
                  </a>
                  <a href="#">
                    <ul>
                      <li>
                        {" "}
                        <Image
                          src="/images/twitter.png"
                          alt="me"
                          width="30"
                          height="30"
                        />
                      </li>
                    </ul>
                  </a>{" "}
                  <a href="#">
                    <ul>
                      <li>
                        {" "}
                        <Image
                          src="/images/Instagram.png"
                          alt="me"
                          width="30"
                          height="30"
                        />
                      </li>
                    </ul>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* PRODUCT CATEGORY */}
          <div className="flex flex-col my-96 md:my-6   w-full h-[830px] bg-[#F7F7F7]">
            <div className=" flex justify-center items-center  pt-0 md:pt-[80px]  ">
              <h2 className=" font-merriWeather text-center font-bold text-[32px] md:text-[36px]">
                Related Product
              </h2>
            </div>

            <div className="flex flex-col  sm:flex-row px-10   md:px-24  w-[1440px]">
              <div className="flex flex-col md:flex-row   space-x-0 space-y-4   md:space-y-0  sm:space-y-0 md:space-x-10 pt-6 md:pt-[90px]">
                <div>
                  {" "}
                  <Image
                    src="/images/product1.png"
                    alt=""
                    width="320px"
                    height="450px"
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    src="/images/product2.png"
                    alt=""
                    width="320px"
                    height="450px"
                  />
                </div>{" "}
                <div>
                  {" "}
                  <Image
                    src="/images/product3.png"
                    alt=""
                    width="320px"
                    height="444px"
                  />
                </div>
                <div>
                  {" "}
                  <Image
                    src="/images/item 4.png"
                    alt=""
                    width="320px"
                    height="444px"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-[#181813]  mt-[1300px] md:mt-0 md:pt-3  ">
          <div className="grid grid-rows-3 md:grid-flow-row md:grid-cols-2   w-full pt-[10px] py-0 divide-white divide-none md:divide-solid md:divide-x-2  ">
            <div className=" flex flex-col md:flex-row items-start justify-start py-0  md:py-10 ">
              <div className="flex flex-col  md:flex-row  space-x-6 md:space-x-3 space-y-6 md:space-y-0 ">
                <p className="font-Inter font-bold uppercase text-[18px] my-0 md:my-2 pl-8  text-[#F2F2F2]">
                  SUBSCRIBE TO OUR NEWSLETTER
                </p>
                <div className="relative   ">
                  <input
                    className="flex-1 px-14 md:px-[36px] text-xl font-normal font-Inter text-white py-2 rounded-full focus:outline-none bg-[#292929]"
                    type="email"
                    placeholder="Enter  your  email  address"
                  />{" "}
                  <button className="absolute text-center py-2 right-2">
                    <Image
                      src="/images/Arrowarror.png"
                      alt="me"
                      width="20"
                      height="8"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-x-5 ">
              <div className="flex">
                <p className="font-Inter font-bold text-[18px] text-white">
                  JOIN US ON
                </p>
              </div>
              <div className="flex flex-row space-x-4">
                <a href="#">
                  <ul>
                    <li>
                      {" "}
                      <Image
                        src="/images/Facebook.png"
                        alt="me"
                        width="30"
                        height="30"
                      />
                    </li>
                  </ul>
                </a>
                <a href="#">
                  <ul>
                    <li>
                      {" "}
                      <Image
                        src="/images/twitter.png"
                        alt="me"
                        width="30"
                        height="30"
                      />
                    </li>
                  </ul>
                </a>{" "}
                <a href="#">
                  <ul>
                    <li>
                      {" "}
                      <Image
                        src="/images/Instagram.png"
                        alt="me"
                        width="30"
                        height="30"
                      />
                    </li>
                  </ul>
                </a>
              </div>
            </div>
          </div>
          <span className="">
            <Image
              className=""
              src="/images/Vector.png"
              alt="me"
              width="1439"
              height="3"
            />
          </span>

          <div className="flex  items-center justify-center space-y-5 md:space-y-0 space-x-20  py-14">
            <div className="container flex flex-col  md:flex-row items-center justify-between  ">
              <div className="md:pb-0 pb-4">
                <p className="font-Inter font-medium text-[17px] text-white">
                  TERMS & CONDITION POLICY
                </p>
              </div>
              <div className="pb-[15px] ">
                {" "}
                <Image
                  src="/images/Logo2.png"
                  alt="me"
                  width="112"
                  height="99"
                />
              </div>

              <div className="">
                <p className="font-Inter font-medium text-[16px] text-white">
                  © 2019 Bamboo All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}


// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import Images from "../public/images/logo.png";

// export default function Home() {
//   return (
//     <>
//       <div>
//         <Head>
//           <title>My NextJS Project with Tailwindcss</title>
//           <meta name="description" content="Generated by create next app" />
//           <link rel="icon" href="/favicon.ico" />
//           {/* font awesome */}
//           <link
//             rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
//             integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
//             crossorigin="anonymous"
//             referrerpolicy="no-referrer"
//           />
//         </Head>
//         <nav className="    mx-auto p-6 w-full h-24 bg-[#181813c9] shadow-[ 0px 4px 4px rgba(0, 0, 0, 0.25)]">
//           <div className="flex  items-center justify-between sm:flex">
//             <div className=" pl-1 flex items-center justify-start sm:pl-24  ">
//               <a href="#"><i className="fas fa-bars text-white text-3xl"></i></a>
//             </div>
//             <div className="flex items-center justify-center">
//               <Image
//                 src="/images/logo.png"
//                 alt="logo"
//                 width="169px"
//                 height="47px"
//                 priority
//               />
//             </div>
//             <div className=" flex space-x-2 pr-1 sm:pr-24 sm:space-x-10">
//               <a href="#"><i className="fas fa-search text-white text-2xl sm:text-3xl "></i></a>
//               <a href="#"><i className="fas fa-shopping-cart text-white text-2xl sm:text-3xl"></i></a>
//             </div>
//           </div>
//         </nav>
//         <main>
//           {/* HOMEPAGE SECTİON */}

//           <div className="Homepage ">
//             <div className="relative   self-center  md:h-[628px] md:w-full mb-14">
//               <Image
//                 src="/images/Background.png"
//                 alt="logo"
//                 objectFit="cover"
//                 objectPosition={"bottom"}
//                 width="1506"
//                 height="628px"
//               />
//             </div>
//             <div className="absolute space-x-[280px] md:space-x-[1160px] flex w-[1348px] h-[98px] top-40  md:top-[315px] px-2 md:px-[46px]">
//               <div className="md:w-[98px] md:h-[98px]">
//                 <Image
//                   className=""
//                   src="/images/right.png"
//                   alt="right"
//                   width="40px"
//                   height="40px"
//                 />
//               </div>
//               <div className="md:w-[98px] md:h-[98px]">
//                 <Image
//                   src="/images/left.png"
//                   alt="left"
//                   width="40px"
//                   height="40px"
//                 />
//               </div>
//             </div>
//             <div className="absolute flex flex-col items-center justify-center top-[100px] md:top-[164px] -left-[285px]  md:left-[246px] w-[948px]  md:h-[241px]  md:py-2">
//               <div>
//                 <p className="font-bold text-sm md:text-2xl text-[#282825]">INDOORS</p>
//               </div>
//               <div>
//                 <p className="font-normal font-merriWeather text-center md:text-center text-sm md:text-[42px] text-[#282825] md:leading-[63.35px]">
//                   See Bamboo’s New Range Of Indoor Furniture
//                 </p>
//               </div>
//               <div className="">
//                 <p className="font-merriWeather  text-xs md:text-2xl text-center">
//                   Classic meet modern living,
//                 </p>
//                 <p className="font-merriWeather  text-xs md:text-2xl text-center">
//                   Bamboo has a fantastic range of indoor furniture,
//                 </p>
//                 <p className="font-merriWeather  text-xs md:text-2xl text-center">
//                   perfect for any modern home.
//                 </p>
//               </div>
//               <div className="flex items-center justify-center   pt-[100px]  md:pt-8   ">
//                 <button className="bg-[#FFB338]  text-black text-[18px] md:text-2xl font-bold px-4 py-1 md:w-[188px] md:h-[60px] rounded-full ">
//                   {" "}
//                   <a
//                     href="#"
//                     className="text-[#282825] font-merriWeather text-center "
//                   >
//                     SEE MORE
//                   </a>
//                 </button>
//               </div>
//             </div>
//             <div className="absolute  flex items-center justify-center top-[590px] left-[640px] ">
//               <div>
//                 {" "}
//                 <Image
//                   src="/images/dots.png"
//                   alt=""
//                   width="160"
//                   height="25px"
//                 />
//               </div>
//             </div>
//             <div className=" flex items-center  justify-center pt-3">
//               <h1 className="text-bold  text-3xl md:text-5xl font-merriWeather text-center">
//                 Featured Product
//               </h1>
//             </div>
//             {/* Products */}
//             <div className=" flex  flex-row items-center justify-center space-x-4   md:my-5 w-full px-5 md:px-24">
//               <div className="flex flex-col gap-y-2 md:gap-y-4">
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture1.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>{" "}
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture4.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture7.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture10.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col pt-10 md:pt-[80px] gap-y-2 md:gap-y-4">
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/Product 22.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>{" "}
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture 5.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>{" "}
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture 8.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture 11.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-y-2 md:gap-y-4">
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture3.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>{" "}
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture6.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>{" "}
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture9.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/furniture12.png"
//                     alt=""
//                     width="396px"
//                     height="510px"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center justify-center py-12 md:py-12 ">
//               <button className="bg-[#FFB338] hover:bg-[#f19f1c]  text-black text-[18px] md:text-2xl font-bold px-4 py-1 md:w-[188px] md:h-[60px] rounded-full ">
//                 {" "}
//                 <a
//                   href="#"
//                   className="text-[#282825] font-merriWeather text-center "
//                 >
//                   LOAD MORE
//                 </a>
//               </button>
//             </div>
//           </div>
//           {/* PRODUCT CATEGORY */}
//           <div className="flex flex-col my-40 md:my-6   w-full h-[830px] bg-[#F7F7F7]">
//             <div className=" flex justify-center items-center  pt-[80px] text-center  ">
//               <h2 className=" font-merriWeather font-bold text-[32px] md:text-[36px]">
//                 Bamboo Products
//               </h2>
//             </div>
//             <div className="flex flex-row items-center justify-center pt-3 md:pt-7">
//               <ul className="space-x-5 md:space-x-12 flex flex-row ">
//                 <a href="#">
//                   <li className="font-Inter font-medium text-[#181813] text-xl md:text-2xl">
//                     CHAIR
//                   </li>
//                 </a>
//                 <a className="" href="#">
//                   <li className="font-Inter underline  underline-offset-[10px] decoration-[#FFB338]  font-medium text-[#181813] text-xl md:text-2xl">
//                     CABINET
//                   </li>
//                 </a>
//                 <a href="#">
//                   <li className="font-Inter font-medium text-[#181813] text-xl md:text-2xl">
//                     SOFA
//                   </li>
//                 </a>
//                 <a href="#">
//                   <li className="font-Inter font-medium text-[#181813] text-xl md:text-2xl">
//                     BENCH
//                   </li>
//                 </a>
//               </ul>
//             </div>
//             <div className="flex  items-center justify-center px-4 md:px-[80px] ">
//               <div className="flex  flex-col sm:flex-row items-center  justify-center space-x-0 space-y-4   md:space-y-0  sm:space-y-0 md:space-x-8 pt-6 md:pt-[90px]">
//                 <div className="overflow-x-auto ">
//                   {" "}
//                   <Image
//                     src="/images/cabinet1.png"
//                     alt=""
//                     width="400px"
//                     height="250px"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/cabinet2.png"
//                     alt=""
//                     width="400px"
//                     height="250px"
//                   />
//                 </div>{" "}
//                 <div>
//                   {" "}
//                   <Image
//                     src="/images/cabinet3.png"
//                     alt=""
//                     width="400px"
//                     height="250px"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             {/* <div className="   flex items-center justify-center px-14 py-2    md:px-44 pt-[40px] ">
//               <div className=" relative z-10 pr-[410px]">
//                 <Image className=""
//                   src="/images/slider_meter.png"
//                   alt=""
//                   width="360px"
//                   height="10px"
//                 />
//               </div>
//               <div className=" absolute z-0">
//                 <Image
//                   src="/images/slider_check.png"
//                   alt=""
//                   width="1280px"
//                   height="10px"
//                 />
//               </div>
//             </div> */}
//           </div>
//         </main>
//         <footer className="bg-[#181813]  pt-3  ">
//           <div className="grid grid-rows-3 md:grid-flow-row md:grid-cols-2   w-full pt-[10px] py-0 divide-white divide-none md:divide-solid md:divide-x-2  ">
//             <div className=" flex flex-col md:flex-row items-start justify-start py-0  md:py-10 ">
//               <div className="flex flex-col  md:flex-row  space-x-6 md:space-x-3 space-y-6 md:space-y-0 ">
//                 <p className="font-Inter font-bold uppercase text-[18px] my-0 md:my-2 pl-8  text-[#F2F2F2]">
//                   SUBSCRIBE TO OUR NEWSLETTER
//                 </p>
//                 <div className="relative   ">
//                   <input
//                     className="flex-1 px-14 md:px-[36px] text-xl font-normal font-Inter text-white py-2 rounded-full focus:outline-none bg-[#292929]"
//                     type="email"
//                     placeholder="Enter  your  email  address"
//                   />{" "}
//                   <button className="absolute text-center py-2 right-2">
//                     <Image
//                       src="/images/Arrowarror.png"
//                       alt="me"
//                       width="20"
//                       height="8"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center gap-x-5 ">
//               <div className="flex">
//                 <p className="font-Inter font-bold text-[18px] text-white">
//                   JOIN US ON
//                 </p>
//               </div>
//               <div className="flex flex-row space-x-4">
//                 <a href="#">
//                   <ul>
//                     <li>
//                       {" "}
//                       <Image
//                         src="/images/Facebook.png"
//                         alt="me"
//                         width="30"
//                         height="30"
//                       />
//                     </li>
//                   </ul>
//                 </a>
//                 <a href="#">
//                   <ul>
//                     <li>
//                       {" "}
//                       <Image
//                         src="/images/twitter.png"
//                         alt="me"
//                         width="30"
//                         height="30"
//                       />
//                     </li>
//                   </ul>
//                 </a>{" "}
//                 <a href="#">
//                   <ul>
//                     <li>
//                       {" "}
//                       <Image
//                         src="/images/Instagram.png"
//                         alt="me"
//                         width="30"
//                         height="30"
//                       />
//                     </li>
//                   </ul>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <span className="">
//           <Image className="" src="/images/Vector.png" alt="me" width="1439" height="3" /></span>

//           <div className="flex  items-center justify-center space-y-5 md:space-y-0 space-x-20  py-14">
//             <div className="container flex flex-col  md:flex-row items-center justify-between  ">
//               <div className="md:pb-0 pb-4">
//                 <p className="font-Inter font-medium text-[17px] text-white">
//                   TERMS & CONDITION POLICY
//                 </p>
//               </div>
//               <div className="pb-[15px] ">
//                 {" "}
//                 <Image
//                   src="/images/Logo2.png"
//                   alt="me"
//                   width="112"
//                   height="99"
//                 />
//               </div>

//               <div className="">
//                 <p  className="font-Inter font-medium text-[16px] text-white">
//                   © 2019 Bamboo All Rights Reserved
//                 </p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

