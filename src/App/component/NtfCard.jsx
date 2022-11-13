import Icons from "../../assets/icons/Icons.jsx"
import imageNFTs from "../../assets/images/imageNFTs.js"


export default function NftCard({ image, title, cost, availability, alt }) {
        return (
                <li className="NFT">
                        <article className=" NFT__card">
                                <div className="img--container">
                                        <Icons name={`heart`} />
                                        <img src={imageNFTs[0].image} alt={imageNFTs[0].alt} srcset="" />
                                </div>
                                <div className="title">
                                        <p>{imageNFTs[0].title}</p>
                                        <p>{imageNFTs[0].cost}</p>
                                </div>
                                <div className="da">
                                        <p>{imageNFTs[0].distance}</p>
                                        <p>{imageNFTs[0].availability}</p>
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
