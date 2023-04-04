import React from 'react';
import { stats } from '../constants';
import styles from '../style';

export default function Stats() {
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter} mx-0 w-full flex-nowrap`}>

            {stats.map((stat, index) => (
                <div key={stat.id}
                    className={`flex flex-1 ${styles.flexCenter} py-10`}>

                    < img src={stat.logo} alt="stat"
                        className={`sm:w-[129.46px] w-[38.57px] sm:h-[29.36px] h-[8.75px] object-contain`}
                    />
                </div>
            ))
            }
        </div >
    )
}
