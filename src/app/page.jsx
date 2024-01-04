
import Navbar from '@/component/navbar/Navbar';
import styles from './page.module.css';
import Footer from '@/component/footer/Footer';
import Image from 'next/image';
// import Button from '@/component/Button/button';
// import Link from 'next/link';
import Button from '../component/Button/button'
export default function Home() {
  return (


    <div className={styles.homePage}>
      
        <div className={styles.cardDivcont}>

         <div className={styles.cardDiv}>

           <div className={styles.cardTitle}> 
                <h1 className={styles.divTitle}>ჩართე საბანკო ნაკრები</h1>
                 <span className={styles.cardSpan}>დაზოგე საკომისიოები</span>
                
                 <Button title="Go to Another Page" url="/other-page" />

       
     {/* </Button > */}

   </div>

            <Image src='/card.png'
              width={300}
              height={180} 
                />

         </div>
      

        </div>
 





  <div className={styles.firstSection}>

       <div className={styles.nawilnawil}>
           <Image className={styles.fImg}     src='/clothes.jpg'
                 width={590}
                 height={260} 
                 />

           <h1 className={styles.nawilH}>ნაწილ–ნაწილ გადახდა</h1>
           <p>ყიდულობ დღეს, იხდი მომდევნო თვიდან ნაწილ–ნაწილ. ზუსტად <br />
            იმდენს, რამდენიც ღირს. ეფექტური 0%.</p>

            <button className={styles.gaigetMeti}>გაიგე მეტი</button>
       </div>


       <div className={styles.twoDivs}>
        

         <div className={styles.smallDiv}>
            <div className={styles.twoDivFirst}> 
               <h5 className={styles.secondH}>დაჯავშნე ფილიალში ვიზიტი</h5>
               <p className={styles.SecondP}>მიიღე საბანკო მომსახურება შენთვის სასურველ ფილიალში რიგირ გარეშე</p>

            <button className={styles.gaigetMeti}>გაიგე მეტი</button>
          </div>
          <Image   src='/phone.png'
                 width={250}
                 height={80} 
                 />
 </div>

         

 <div className={styles.smallDiv}>
            <div className={styles.twoDivFirst}> 
               <h5 className={styles.secondH}>ეგრევე ჩაირიცხება 24/7</h5>
               <p className={styles.SecondP}>გადმოიტანე ან გადარიცხე თანხა სხვა ბანკში ნებისმიერ დროს</p>

            <button className={styles.gaigetMeti}>გაიგე მეტი</button>
          </div>
          <Image   src='/sweater.jpeg'
                 width={90}
                 height={60} 
                 />
 </div>
         {/* <div className={styles.twoDivSecond}> </div> */}

       </div>


     </div>


  <div className={styles.secondSection}> 
    <h3>აირჩიე შენი სივრცე</h3>

    <div className={styles.rame}>
    <div className={styles.spacetitle}>
    <Image src='/coffee.jpg'
              width={150}
              height={90} 
                />
      <span>სტუდენტებისთვის</span>

    </div>
    <div className={styles.spacetitle}>
    <Image src='/coffee.jpg'
              width={150}
              height={90} 
                />
      <span>სტუდენტებისთვის</span>

    </div>

    <div className={styles.spacetitle}>
    <Image src='/coffee.jpg'
              width={150}
              height={90} 
                />
      <span>სტუდენტებისთვის</span>

    </div>
    </div>
  
  </div>

  <div className={styles.thirdSection}> 
    <h1 className={styles.thirdSectionheader} >რეკომენდებული პროდუქტები</h1>

    <div className={styles.thirdCard}>
    <div className={styles.thirSspacetitle}>
    <Image className={styles.thirdCardimg} src='/1.jpg'
              width={360}
              height={250} 
                />
      <h2 className={styles.cardtitle} >გაიგე სესხის ლიმიტი</h2>
      <br />
      <span>შეამოწმე შენთვის დამტკიცებული ლიმიტები და გაიაქტიურე სესხი რამდენიმე წამში</span>
      <button className={styles.gaigetMeti}>გაიგე ლიმიტი</button>


    </div>
    <div className={styles.thirSspacetitle}>
    <Image className={styles.thirdCardimg} src='/1.jpg'
              width={360}
              height={250} 
                />
      <h2 className={styles.cardtitle} >გაიგე სესხის ლიმიტი</h2>
      <br />
      <span>შეამოწმე შენთვის დამტკიცებული ლიმიტები და გაიაქტიურე სესხი რამდენიმე წამში</span>
      <button className={styles.gaigetMeti}>გაიგე ლიმიტი</button>


    </div>
    <div className={styles.thirSspacetitle}>
    <Image className={styles.thirdCardimg} src='/1.jpg'
              width={360}
              height={250} 
                />
      <h2 className={styles.cardtitle} >გაიგე სესხის ლიმიტი</h2>
      <br />
      <span>შეამოწმე შენთვის დამტკიცებული ლიმიტები და გაიაქტიურე სესხი რამდენიმე წამში</span>
      <button className={styles.gaigetMeti}>გაიგე ლიმიტი</button>


    </div>
  
    </div>
  
  </div>


      </div>



//     <main className={styles.container}>
      
//       {/* card div */}
//       <div className={styles.cardDiv}>

//         <div className={styles.cardTitle}> 
//             <h1 className={styles.divTitle}>ჩართე საბანკო ნაკრები</h1>
//             <span className={styles.cardSpan}>დაზოგე საკომისიოები</span>
//             <button className={styles.cardButton}>გაიგე მეტი</button>
//         </div>
//                
//       </div>



//     {/* section div */}
//     <div className={styles.secDiv} >

//     </div>





//     {/* first section */}
//     <div className={styles.firstSection}>

//       <div className={styles.nawilnawil}>
//           <Image className={styles.fImg}     src='/clothes.jpg'
//                 width={490}
//                 height={180} 
//                 />

//           <h1 className={styles.nawilH}>ნაწილ–ნაწილ გადახდა</h1>
//           <p>ყიდულობ დღეს, იხდი მომდევნო თვიდან ნაწილ–ნაწილ. ზუსტად <br />
//            იმდენს, რამდენიც ღირს. ეფექტური 0%.</p>

//            <button className={styles.gaigetMeti}>გაიგე მეტი</button>
//       </div>


//       <div className={styles.twoDivs}>
        

//         <div className={styles.smallDiv}>
//            <div className={styles.twoDivFirst}> 
//               <h5 className={styles.secondH}>ნაწილ–ნაწილ გადახდა</h5>
//               <p>ყიდულობ დღეს, იხდი მომდევნო თვიდან ნაწილ–ნაწილ. ზუსტად <br />
//                იმდენს, რამდენიც ღირს. ეფექტური 0%.</p>

//            <button className={styles.gaigetMeti}>გაიგე მეტი</button>
//          </div>
//          <Image   src='/sweater.jpeg'
//                 width={90}
//                 height={60} 
//                 />
// </div>
//         <div className={styles.twoDivSecond}> </div>

//       </div>


//     </div>







//       {/* <span className={styles.mySpan}>Home</span> */}
   
//    {/* <Navbar/> */}


//    {/* <Footer/> */}
//     </main>


 
  )
}
