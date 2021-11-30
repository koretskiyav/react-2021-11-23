import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant ({menu, reviews}) {
    return (
        <div>
            <Menu menu={menu} />
            <Reviews reviews={reviews} /> 
        </div>
    )
    
}