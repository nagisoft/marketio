import Image from 'next/image';
import data from "../data/heroSection.json";


const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Name@company.com" />
                                <button type="submit" >BUY NOW</button>
                            </div>
                        </form>
                    </div>


                    <div className="right-side">
                        <Image src="/undraw_book_lover_re_rwjy.svg" layout="fill" />
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Hero;