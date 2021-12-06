import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  const reviews = restaurants[0].reviews;
  const wrapper = mount(<Reviews reviews={reviews} />);

  it('should render', () => {
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should have children', () => {
    expect(wrapper.find('[data-id="review"]').length).not.toBe(0);
  });

  it('each child is not Anonymous', () => {
    wrapper.find('[data-id="review"]').forEach((el) => {
      expect(el.find('h4').text()).not.toBe('Anonymous');
    });
  });

  it('each child name is not empty', () => {
    wrapper.find('[data-id="review"]').forEach((el) => {
      expect(el.find('h4').text().length).not.toBe(0);
    });
  });

  it('each child has description', () => {
    wrapper.find('[data-id="review"]').forEach((el) => {
      expect(el.find('p').text().length).not.toBe(0);
    });
  });
});
