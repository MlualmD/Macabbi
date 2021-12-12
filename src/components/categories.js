import { FormControl, Radio, RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@mui/material";
import "../style/Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <FormControl component="fieldset">
        <RadioGroup sty row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="חיפוש לפי שם רופא"
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="חיפוש לפי תחום טיפול"
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="חיפוש לפי מומחיות"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Categories;
