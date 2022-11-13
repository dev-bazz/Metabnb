import Icons from '../../assets/icons/Icons';
import heroImage from '../../assets/images/hero-image.webp';

export default function Home() {
        return (
                <section >
                        <div className="hero container--global">
                                <div className="container--wrapper">
                                        <h1 className='hero--title'>Rent a <span> Place </span> away from<br /> <span> Home </span> in the <span> Metaverse</span></h1>
                                        <p className='hero--msg'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                                        <div className="hero--search">
                                                <input type={`text`} placeholder='Search for location' />
                                                <button className='btn'>Search</button>
                                        </div>
                                </div>
                                <div className="container--wrapper">
                                        <img src={heroImage} alt="a collections of NFTs displaye in an offset grid layout" srcset="" />
                                </div>
                        </div>
                        <div className="brands">
                                <div className="brands--wrapper container--global">
                                        <Icons name={`mb-token`} />
                                        <Icons name={`meta-mask`} />
                                        <Icons name={`open-sea`} />
                                </div>
                        </div>
                </section>
        )
}
