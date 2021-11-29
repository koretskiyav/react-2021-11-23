import useEmptyStars from "../hooks/use-empty-stars";

export default (WrappedComponent) => (props) => {
    const stars = useEmptyStars();
    return <WrappedComponent {...props} stars={stars}/>
};
