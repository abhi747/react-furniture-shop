import React from "react";

interface Props {
  stars: number;
  author: string;
  date: string;
  title: string;
}

const ReviewPost: React.FC<Props> = (props) => {
  const { stars, author, date, title } = props;
  let ratings;
  let ratingsArr: any[] = [1, 1, 1, 1, 1];

  ratings = ratingsArr.map((item, index) => {
    let className = "";
    if (index + 1 <= stars) {
      className = "checked";
    }
    return <span className={"fa fa-star " + className} key={index}></span>;
  });

  return (
    <>
      <div>
        {author}
        <br />
        <span className="text-secondary">
          <small>{date}</small>
        </span>
        <br />
        <b>{title}</b>
        <br />
        {ratings}
      </div>
      <div className="text-justify">{props.children}</div>
    </>
  );
};

export default ReviewPost;
