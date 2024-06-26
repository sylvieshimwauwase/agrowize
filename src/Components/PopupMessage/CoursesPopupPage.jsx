import React from 'react'
import CoursesPopup from '../../Components/PopupMessage/CoursesPopup/CoursesPopup';

const CoursesPopupPage = ({product, onClose}) => {
  if (!product){
    return null;
  }
  return (
    <div>
      <CoursesPopup
        text="Congratulations"
        titleText={product.title || "Default Title"}
      />
      <button onClick={onClose}>Close</button>

      <CoursesPopup text="Congratulations" titleText="Vertical Farming." />

    </div>
  );
}

export default CoursesPopupPage