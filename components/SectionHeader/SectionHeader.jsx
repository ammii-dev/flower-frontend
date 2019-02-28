import style from "./SectionHeader.scss"

const SectionHeader = (props) => (
  <div className={style.header_wrapper}>
    <h2>
      {props.heading}
    </h2>
    <p>
      <span>{props.description}</span>
    </p>
  </div>
)

export default SectionHeader