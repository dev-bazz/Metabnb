import { BrandLogo, Star, Heart } from "./BrandSet"
const Icons = ({ name, ...rest }) => {
        switch (name) {
                case "brand":
                        return <BrandLogo {...rest} />;
                case "star":
                        return <Star />;
                case "heart":
                        return <Heart />;
                default:
                        return <span>No Icon Selected</span>;
        }
}

export default Icons
