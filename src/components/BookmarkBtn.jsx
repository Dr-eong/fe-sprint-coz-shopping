import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./BookmarkBtn.css";

function BookmarkBtn() {
  const [bookmark, setBookmark] = useState(false);

  const onBookmarkClickFun = () => {
    setBookmark((bookmark) => !bookmark);
  };
  // FIXME : 그림자 효과 추가해야 함
  return (
    <>
      {bookmark ? (
        <FontAwesomeIcon
          className="bookmark-icon"
          onClick={onBookmarkClickFun}
          icon={faStar}
          style={{ color: "#FFD361", width: "24px", height: "24px" }}
        />
      ) : (
        <FontAwesomeIcon
          className="bookmark-icon"
          onClick={onBookmarkClickFun}
          icon={faStar}
          style={{ color: "#dfdfdf", width: "24px", height: "24px" }}
        />
      )}
    </>
  );
}
export default BookmarkBtn;
