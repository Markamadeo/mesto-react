export const createNewCard = (data, template, formViever, formDelete, userInfo, removeLikePhoto, addLikePhoto) => {
  const card = new Card(data, template, formViever, formDelete, userInfo, removeLikePhoto, addLikePhoto);
  const cardElement = card.generateCard();
  return cardElement;
}
