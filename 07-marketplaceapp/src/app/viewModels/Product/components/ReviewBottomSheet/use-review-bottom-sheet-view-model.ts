import { useEffect, useState } from "react";
import { Toast } from "toastify-react-native";
import { useCreateCommentMutation } from "../../../../shared/queries/comments/use-create-comment-mutation";
import { useGetUserCommentQuery } from "../../../../shared/queries/comments/use-get-user-comment-query";
import { useUpdateCommentMutation } from "../../../../shared/queries/comments/use-update-comment-mutation";

interface IRatingForm {
  content: string;
  rating: number;
  isEditing: boolean;
  commentId?: number;
}

const initialFomValue: IRatingForm = {
  content: "",
  rating: 0,
  isEditing: false,
  commentId: undefined,
};

export const useReviewBottomSheetViewModel = (productId: number) => {
  const [ratingForm, setRatingForm] = useState<IRatingForm>(initialFomValue);

  const { data: userComment, isLoading: loadingUserComment } =
    useGetUserCommentQuery(productId);

  const createComment = useCreateCommentMutation(productId);
  const updateComment = useUpdateCommentMutation(productId);

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

  const handleFormSubmit = async () => {
    if (ratingForm.rating === 0) {
      Toast.warn("Por favor, selecione uma nota para o produto.", "top");
      return;
    }

    if (!ratingForm.content.trim()) {
      Toast.warn("Por favor, insira um comentário sobre o produto.", "top");
      return;
    }

    const { isEditing, ...formData } = ratingForm;

    if (isEditing) {
      updateComment.mutate({
        ...formData,
        commentId: ratingForm.commentId!,
      });
    } else {
      createComment.mutate({
        content: formData.content,
        rating: formData.rating,
        productId,
      });
    }
  };

  useEffect(() => {
    if (userComment && userComment.comment) {
      setRatingForm({
        content: userComment.comment.content,
        rating: userComment.rating,
        isEditing: true,
        commentId: userComment.comment.id,
      });
    } else {
      setRatingForm(initialFomValue);
    }
  }, [userComment]);

  const isLoading = createComment.isPending || updateComment.isPending;

  return {
    ratingForm,
    isLoading,
    handleFormSubmit,
    handleRatingChange,
    handleContentChange,
  };
};
