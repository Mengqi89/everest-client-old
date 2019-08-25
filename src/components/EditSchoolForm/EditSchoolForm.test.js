import React from 'react'
import EditSchoolForm from './EditSchoolForm'
import schools from '../../dummyData/schools'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import { mount } from 'enzyme';


describe('EditSchoolForm', () => {
  it('should render correctly', () => {
    const component = mount(<BrowserRouter>
      <UserContext.Provider value={{ user: schools[0] }}>
        <EditSchoolForm />
      </UserContext.Provider>
    </BrowserRouter>);

    expect(component).toMatchSnapshot();
  });
});
