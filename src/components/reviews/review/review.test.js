import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('(should render Review component)', () => {
  const wrapper = mount(<Review key={review.id} {...review} />);
  it('should contain Review wrapper', () => {
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should contain userName wrapper', () => {
    expect(wrapper.find('[data-id="review-user"]').length).toBe(1);
  });

  it('should contain text wrapper', () => {
    expect(wrapper.find('[data-id="review-text"]').length).toBe(1);
  });

  it('should contain rating wrapper', () => {
    expect(wrapper.find('[data-id="review-rating"]').length).toBe(1);
  });
});
