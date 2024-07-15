import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const classes = {
  liClasses: "pt-5 py-5 pr-10 rounded mb-5 border cursor-pointer",
  liTopClasses: "flex items-center ml-10",
  collapseBtnClasses: "bg-white p-2 rounded-full mr-2 ",
  headerClasses: "font-medium",

  liBottomClasses: "ml-20 mt-5",
  textClasses: "text-xs text-gray-500 leading-relaxed mb-5",
  learnBtnClasses: "bg-purple-500 rounded-full py-2 px-4 text-sm text-white",
};

const ListItem = (props) => {
  return (
    <li onClick={props.faqClick}
      className={
        classes.liClasses + `${props.show && "bg-purple-50"}`
      }
    >
      <div className={classes.liTopClasses}>
        <button className={classes.collapseBtnClasses}>
          {props.show && <AiOutlineMinus />}
          {!props.show && <AiOutlinePlus />}
        </button>
        <h1 className={classes.headerClasses}>
          {props.question}
        </h1>
      </div>

{props.show && <div className={classes.liBottomClasses}>
        <p className={classes.textClasses}>{props.answer}</p>
        <button className={classes.learnBtnClasses}>Learn more</button>
      </div>}
    </li>
  );
};

export default ListItem;