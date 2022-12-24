import { AuthorText, Review } from "./ReviewItem.styled";

export function ReviewItem({review: {author, content}}) {
    return <li>
        <AuthorText>Author: {author}</AuthorText>
        <Review>``{content}``</Review>
    </li>
}