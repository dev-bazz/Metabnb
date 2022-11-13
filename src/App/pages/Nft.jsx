import Icons from "../../assets/icons/Icons";
import {allNFT} from "../../assets/images/imageNFTs";
import NftCard from "../component/NtfCard";

export default function Nft() {
        return (
                <main className="container--global nft-page">
                        <section className="top">
                                <ul role={`list`} className={`nav-list`}>
                                        <l1>Resturant</l1>
                                        <l1>Cottage</l1>
                                        <l1>Castle</l1>
                                        <l1>fantast city</l1>
                                        <l1>beach</l1>
                                        <l1>Carbins</l1>
                                        <l1>Off-grid</l1>
                                        <l1>Farm</l1>
                                </ul>
                                <div className="location">
                                        <p>Location</p> <Icons name={`settings`} />
                                </div>
                        </section>
                        <section>
                                <ul className="nft-list" role={`list`}>
                                        {allNFT.map((nft, index) => <NftCard
                                                image={nft.image}
                                                title={nft.title}
                                                alt={nft.alt}
                                                availability={nft.availability}
                                                distance={nft.distance}
                                                cost={nft.cost}
                                                key={index}
                                        />)}
                                </ul>
                        </section>
                </main>
        )
}
