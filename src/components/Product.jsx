import axios from "axios";
import { useState, useEffect, React } from "react";
// import "./card.scss"
//import { withAlert } from 'react-alert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
// import car from '../asserts/car.jpg'

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/fetch")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <>
      <br></br>
      <div className="wrapper" >
        {
          data.map((singleData) => {
            const base64data = singleData.image;
            // console.log("image's binary value : ", base64data)

            return <>
              <div >
                <Cards
                  img={singleData.image}
                  title={singleData.foodName}
                  description={singleData.desc}
                  price={singleData.price}
                />
              </div>
            </>
          })
        }
      </div>
    </>
  );
}

function Cards(props) {
  const notify = () => toast("hi");
  return (
    <>
      <div className="card__body" >
        <Card style={{ width: '18rem' }} className="card_body">
          <Card.Img variant="top" src={props.img} className="card_image" style={{ height: "250px" }} />
          <Card.Body>
            <Card.Title className="card__title" >{props.title}</Card.Title>
            <Button variant="secondary"> {` $${props.price}`}/-</Button>
            <Button variant="danger" className="card__btn" value="remove" onClick={notify} style={{ justifyContent: "center", textAlign: "center" }}>Order Now</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Product