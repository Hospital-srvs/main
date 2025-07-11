import '../../assets/css/Breadcrum.css';
import halfShape from '../../assets/images/all images/half-shape.png';
import half from '../../assets/images/all images/half.png'

export const Breadcrum = (props) => {
    return<>
    
    <div className="bread-crum">

        <div className="inside-bread-crum">
            <h1>{props.title}</h1>
            <img src={halfShape} alt="" className="half-shape-bread" />
            <img src={half} alt="" className="half-about" />
        </div>

    </div>

    </>
}