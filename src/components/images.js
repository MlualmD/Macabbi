import man from "../image/man.jpeg";
import girl from "../image/girl.jpeg";

const Images = () => {
  const style = {
    display: "flex",
    justifyContent: " space-between",
  };
  return (
    <div style={style}>
      <img src={girl} alt="man" />
      <img src={man} alt="girl" />
    </div>
  );
};

export default Images;
