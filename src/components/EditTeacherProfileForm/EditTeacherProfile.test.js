import React from 'react'
import EditTeacherProfile from './EditTeacherProfile'
import teachers from '../../dummyData/teacher'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import { mount } from 'enzyme';


describe('EditTeacherProfile', () => {
  it('should render correctly', () => {
    const component = mount(<BrowserRouter>
      <UserContext.Provider value={{ user: teachers[0] }}>
        <EditTeacherProfile />
      </UserContext.Provider>
    </BrowserRouter>);

    expect(component).toMatchSnapshot();
  });
});
