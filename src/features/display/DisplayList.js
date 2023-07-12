import { Col, Row } from "reactstrap";
//import DisplayCard from './DisplayCard';
import { selectFeaturdPromotions } from "../promotions/promotionsSlice";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";

const DispayList = () => {
    const items = [selectFeaturdPromotions(), selectFeaturedCampsite(), selectFeaturedPartner()]
    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className="m-1" key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                )
            })}
        </Row>
    );
}

export default DispayList