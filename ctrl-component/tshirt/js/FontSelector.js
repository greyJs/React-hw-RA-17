class FontSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fonts, onSelect, selected } = this.props;

    return (
      <div className="font-picker">
        {fonts.map(font => (
          <Fonts font={font} func={onSelect}  select={selected}/>
        ))}
      </div>
    );
  }
}

class Fonts extends React.Component {
  constructor(props) {
    super(props);
  }

  getTypeFont = (event) => {
    this.props.func(this.props.font);
  };

  render() {
    const { name, path } = this.props.font;

    return (
      <div className="grid center font-item">
        <input
          type="radio"
          name="font"
          value={name}
          id={name}
          onChange={this.getTypeFont}
        />
        <label htmlFor={name} className="grid-1">
          <PictureFont text={name} path={path} />
        </label>
      </div>
    );
  }
}
