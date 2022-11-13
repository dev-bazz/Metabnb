import Icons from "../../assets/icons/Icons.jsx"
import imageNFTs from "../../assets/images/imageNFTs.js"


export default function NftCard({ image, title, cost, availability, alt, distance }) {
        return (
                <li className="NFT">
                        <article className=" NFT__card">
                                <div className="img--container">
                                        <Icons name={`heart`} />
                                        <img src={image} alt={alt} srcset="" />
                                </div>
                                <div className="title">
                                        <p>{title}</p>
                                        <p>{cost}</p>
                                </div>
                                <div className="da">
                                        <p>{distance}</p>
                                        <p>{availability}</p>
                                </div>
                                <div className="rating">
                                        
                                        <Icons name={`star`} />
                                        <Icons name={`star`} />
                                        <Icons name={`star`} />
                                        <Icons name={`star`} />
                                        <Icons name={`star`} />
                                </div>
                        </article>
                </li>
        )
}
