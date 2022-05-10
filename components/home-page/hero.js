import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/steven.png" alt="An image showing Max" width={300} height={300}/>
        </div>
        <h1>Hi, I&apos;m Steven</h1>
        <p>
            Iblog about web development
        </p>

    </section>
}

export default Hero;