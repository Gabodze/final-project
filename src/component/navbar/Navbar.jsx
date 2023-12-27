import მთავარი from '@/app/main/page'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

function Navbar() {

  const links = [
    
    {
      id: 1,
      title: "მთავარი",
    },

    {
      id: 2,
      title: "ბარათები",
    },

    {
      id: 3,
      title: "დეპოზიტები",
    },

    {
      id: 4,
      title: "ინვესტიციები",
    },

    {
      id: 5,
      title: "დაზღვევა",
    },
  ];

  return (

    <div className={styles.navContainer} >

     {/* <div className={styles.logo}>BOG logo</div> */}

    <Image src='/bog.png' 
    width={220}
    height={40}
    />
      <div className={styles.navbarLinks}>
        {links.map((link) => (
        <div>{link.title} </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar