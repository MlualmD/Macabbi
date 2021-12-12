const Summary = ({ summary }) => {
  const myStyle = {
    display: "flex",
    justifyContent: "center",
    fontSize: "30px",
    marginTop: "30px",
  };
  if (!summary) return null;
  return (
    <div
      style={myStyle}
    >{`מציג ${summary.sum} תוצאות חיפוש לפי הערך: ${summary.terms}`}</div>
  );
};

export default Summary;
