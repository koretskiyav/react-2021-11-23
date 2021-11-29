import useCalculateAverageRating from "../hooks/use-calculate-average-rating";

export default (WrappedComponent) => (props) => {
    const averageRating = useCalculateAverageRating(props.reviews);
    return <WrappedComponent {...props} averageRating={averageRating} />;
};
