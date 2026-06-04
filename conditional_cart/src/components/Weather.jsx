const Weather = ({ temperature }) => {
  return(
    <div>
      {if(temperature < 15) && <h1>Its cold outside</h1>}
    {else if(temperature > 15 && temperature < 25){<h1></h1>}}
    </div>
  );
};
