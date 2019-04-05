class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: null
    };
    this.validEmail = this.validEmail;
  }

  validEmail = () =>{
    if (this.element.validity.valid) {
      this.setState(() => {
        return {
          valid: true
        };
      });
    } else {
      this.setState(() => {
        return {
          valid: false
        };
      });
    }
  }
  render() {
    const { valid } = this.state;
    return (
      <div className="subscribe__form">
        <form
          className={`form form--subscribe ${valid ? "is-valid" : "is-error"}`}
        >
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="input-email"
              placeholder="Email"
              className="form-control"
              value={this.state.email}
              onChange={this.validEmail}
              ref={el => (this.element = el)}
            />
            <div className="form-error">
              Пожалуйста, проверьте корректность адреса электронной почты
            </div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
