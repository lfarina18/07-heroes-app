import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashBoardRoutes } from '../../routers/DashBoardRoutes';

describe('Pruebas en DashBoardRoutes', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Leonardo',
    },
  };

  test('Debe de mostrarse correctamente - Marvel', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <DashBoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Leonardo');
    expect(wrapper.find('h1').text().trim()).toBe('MarvelScreen');
  });

  test('Debe de mostrarse correctamente - DC', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashBoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('DCScreen');
  });
});
