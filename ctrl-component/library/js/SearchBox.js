class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  nameFilter = (event) => {
    this.props.filterBooks(event.currentTarget.value);
  };

  getValue = () => {
    return this.props.value;
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Поиск по названию или автору"
        onChange={this.nameFilter}
        value={this.getValue()}
      />
    );
  }
}
