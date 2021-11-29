const useCalculateAverageRating = (reviews) => {
    let ratingSummary = 0;
    reviews.forEach(({ rating }) => ratingSummary += rating);
    return Math.round(ratingSummary / reviews.length);
};

export default useCalculateAverageRating;
