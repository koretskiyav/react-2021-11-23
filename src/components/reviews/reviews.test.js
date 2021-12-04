import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review/review';
import Rating from '../rate/rate';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should contain all reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });

  it('should have right review data', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    const firstReview = wrapper.find(Review).at(0);
    expect(firstReview.find('[data-id="review-user"]').text()).toBe(reviews[0].user);
    expect(firstReview.find('[data-id="review-text"]').text()).toBe(reviews[0].text);
    expect(firstReview.find(Rating).prop('value')).toBe(reviews[0].rating);
  });

});
