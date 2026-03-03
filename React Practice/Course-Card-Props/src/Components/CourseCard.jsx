export const CourseCard = ({title, price, duration, trainer, placement, rating}) => {
    return (
        <>
            <div className="card-container">
                <div className="card-content">
                    <p><strong>Title</strong>: {title}</p>
                    <p><strong>Price</strong>: {price}</p>
                    <p><strong>Duration</strong>: {duration}</p>
                    <p><strong>Trainer</strong>: {trainer}</p>
                    <p><strong>Placement</strong>: {placement}</p>
                    <p><strong>Rating</strong>: {rating}</p>
                </div>
            </div>
        </>
    )
}