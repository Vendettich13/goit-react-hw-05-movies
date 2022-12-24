import { ReviewItem } from "components/ReviewItem/ReviewItem"
import { List } from "./ReviewsList.styled"

export function ReviewsList({reviews}) {
    return <List>
        {reviews.map(review => {
            return <ReviewItem review={review} key={review.id} />
        })}
        </List>
}