import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function BookmarkBtn() {
  const [bookmark, setBookmark] = useState(false);

  const onBookmarkClickFun = () => {
    setBookmark((bookmark) => !bookmark);
  };

  return (
    <>
      {bookmark ? (
        <FontAwesomeIcon
          onClick={onBookmarkClickFun}
          icon={faStar}
          style={{ color: "#FFD361", width: "24px", height: "24px" }}
        />
      ) : (
        <FontAwesomeIcon
          onClick={onBookmarkClickFun}
          icon={faStar}
          style={{ color: "#dfdfdf", width: "24px", height: "24px" }}
        />
      )}
    </>
  );
}
export default BookmarkBtn;
