import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

Enzyme.configure({ adapter: new Adapter() });

const reviews = [{
    id: '5db6247b-ab1c-49db-be1f-8dd27fd38b81',
    text: 'Finally! This place is amazing place for breakfast, lunch, dinner and supper',
    rating: 5,
  }];

describe('Reviews', () => {
  it(' should render Reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render Rate', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('svg[data-id="review-rating"]').length).toBe(5);
  });

  it('should render default name', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('h4[data-id="review-name"]').text()).toEqual('Anonymous')
  });

  it('should render text', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('p[data-id="review-text"]').text()).toEqual('Finally! This place is amazing place for breakfast, lunch, dinner and supper')
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.props().reviews[0].rating).toEqual(5);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
  });

  it('reviews is an array of objects', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(reviews).toHaveLength(1);
  });

  it('review has properties', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(reviews[0]).toHaveProperty('id');
    expect(reviews[0]).toHaveProperty('text');
    expect(reviews[0]).toHaveProperty('rating');
  });

  it('reviews rating is a number', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(typeof reviews[0].rating).toEqual("number");
  });
});

