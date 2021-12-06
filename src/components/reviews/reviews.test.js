import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Product', () => {
  test('should contains Review component for each review', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find(Review).length).toBe(reviews.length);
  });
});
