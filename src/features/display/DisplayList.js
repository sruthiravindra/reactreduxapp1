import { Col, Row } from "reactstrap";
import DisplayCard from './DisplayCard';
import { selectFeaturdPromotions } from "../promotions/promotionsSlice";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";

const DispayList = () => {
    const items = [selectFeaturdPromotions(), selectFeaturedCampsite()]
    return(
            <Row>
                {items.map((item, idx)=>{
                    return(
                        <Col md className="m-1" key={idx}>
                            <DisplayCard item={item}/>
                        </Col>
                    )
                })}
            </Row>
    );
}

export default DispayList