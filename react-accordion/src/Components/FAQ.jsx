// Components
import ListItem from "./ListItem";

const FAQ = (props) => {

  return (
    <div className="p-10">
      <ul>
        {props.question.map((info, index) => (
          <ListItem
            faqClick={() => {props.accordionElementHandler(index)}}
            question={info.question}
            answer={info.answer}
            show={info.show}
          />
        )
        )
        }
      </ul>
    </div>
  );
}

export default FAQ;