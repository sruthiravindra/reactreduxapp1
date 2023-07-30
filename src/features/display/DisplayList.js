import { Col, Row } from "reactstrap";
//import DisplayCard from './DisplayCard';
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DispayList = () => {
    const items = useSelector((state) => [
        selectFeaturedPromotion(state), 
        selectFeaturedCampsite(state), 
        selectFeaturedPartner(state)])
        console.log('display items:', items);
    return (
        <Row>
            {items.map((item, idx) => {
                const { featuredItem, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    featuredItem && (
                        <Col md className="m-1" key={idx}>
                            <AnimatedDisplayCard item={featuredItem} />
                        </Col>
                    )
                )
            })}
        </Row>
    );
}

export default DispayList