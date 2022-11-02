import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Image.module.css'

export default function OwnImage({path,radius}) {
    return (
        <div className={styles.imageContainer}>
            <Image src={path} layout="fill" alt="image" className={styles.image} style={{ borderRadius: radius }}/>
        </div>
    )
}
