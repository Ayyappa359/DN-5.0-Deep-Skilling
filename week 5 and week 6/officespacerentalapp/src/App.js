import './App.css';
import office from './office.jpg';

function App() {

  const offices = [

    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office
    },

    {
      Name: "Regus",
      Rent: 75000,
      Address: "Hyderabad",
      Image: office
    },

    {
      Name: "Smart Works",
      Rent: 45000,
      Address: "Bangalore",
      Image: office
    }

  ];

  return (

    <div className="container">

      <h1>Office Space , at Affordable Range</h1>

      {

        offices.map((item, index) => {

          let colors = [];

          if (item.Rent <= 60000) {

            colors.push("textRed");

          }

          else {

            colors.push("textGreen");

          }

          return (

            <div key={index}>

              <img
                src={item.Image}
                alt="office"
                width="250"
                height="200"
              />

              <h2>Name: {item.Name}</h2>

              <h3 className={colors[0]}>
                Rent: Rs. {item.Rent}
              </h3>

              <h3>
                Address: {item.Address}
              </h3>

              <br />

            </div>

          );

        })

      }

    </div>

  );

}

export default App;