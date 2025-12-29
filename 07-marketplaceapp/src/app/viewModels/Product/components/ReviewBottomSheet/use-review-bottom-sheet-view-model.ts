import { useEffect, useState } from "react";
import { useGetUserCommentQuery } from "../../../../shared/queries/comments/use-get-user-comment-query";

interface IRatingForm {
  content: string;
  rating: number;
  isEditing: boolean;
}

const initialFomValue: IRatingForm = {
  content: "",
  rating: 0,
  isEditing: false,
};

export const useReviewBottomSheetViewModel = (productId: number) => {
  const [ratingForm, setRatingForm] = useState<IRatingForm>(initialFomValue);

  const { data: userComment, isLoading: loadingUserComment } =
    useGetUserCommentQuery(productId);

  const handleRatingChange = (newRating: number) => {
    setRatingForm((prev) => ({
      ...prev,
      rating: newRating,
    }));
  };

  const handleContentChange = (newContent: string) => {
    setRatingForm((prev) => ({
      ...prev,
      content: newContent,
    }));
  };

  useEffect(() => {
    if (userComment && userComment.content && userComment.rating) {
      setRatingForm({
        content: userComment.content,
        rating: userComment.rating,
        isEditing: true,
      });
    } else {
      setRatingForm(initialFomValue);
    }
  }, [userComment]);

  return {
    ratingForm,
    handleRatingChange,
    handleContentChange,
  };
};
