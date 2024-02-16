import Data from "../Data"
function Card(props) {
  return (
    <>
       <div className="container">
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.meaning}</p>
            </div>
        </div> 
    </>
  )
}

export default Card
