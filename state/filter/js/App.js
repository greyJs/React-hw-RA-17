'use strict'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { selected: 'All'}
  };

newState(filter){
  this.setState ({
    selected : filter
  });
}

passActiveFilter(){
  if (this.state.selected === 'All') {
    return this.props.projects;
  }
  return this.props.projects.filter(project => project.category === this.state.selected);
}

render() {
  return (
    <div>
      <Toolbar
        filters={this.props.filters}
        selected={this.state.selected}
        onSelectFilter={(filter) => this.newState(filter)} />
      <Portfolio projects={this.passActiveFilter()} />
    </div>
  );
}
}
