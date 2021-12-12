const Doctor = ({ doc }) => {
  const myStyle = {
    display: "flex",
    marginRight: "30px",
    fontSize: "30px",
    marginTop: "50px",
  };

  return <div style={myStyle}>{doc.name}</div>;
};

export default Doctor;
