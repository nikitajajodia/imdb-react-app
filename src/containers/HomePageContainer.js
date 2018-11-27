import React from 'react';

import {
  TextInput,
  DropDown,
} from '../components';

const filters = [{
  value: 1,
  label: 'all',
}, {
  value: 2,
  label: 'movies',
}];

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      selectedFilter: {
        value: 1,
        label: 'all',
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  }

  handleFilterChange = (selectedFilter) => {
    this.setState({
      selectedFilter,
    });
  }

  render() {
    const {
      searchString,
      selectedFilter,
    } = this.state;
    return (
      <div className="home-page">
        <div className="top-header">
          logo
          <div className="search-bar">
            <TextInput
              value={searchString}
              handleChange={e => this.handleChange(e)}
              type="text"
            />
            <DropDown
              selectedValue={selectedFilter}
              handleChange={value => this.handleFilterChange(value)}
              options={filters}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageContainer;
