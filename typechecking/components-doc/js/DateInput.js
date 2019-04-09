'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};
const getCurrentDate = () => {
  const currentDate = new Date();
  const curMonth = currentDate.getMonth() + 1;
  const curDate = currentDate.getDate();
  const date = [
    currentDate.getFullYear(),
    (curMonth > 9 ? "" : "0") + curMonth,
    (curDate > 9 ? "" : "0") + curDate
  ]
    .join(",")
    .replace(/,/g, "-");

  return date;
};

DateInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool
};

DateInput.defaultProps = {
  value: getCurrentDate()
};
